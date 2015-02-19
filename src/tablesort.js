;(function() {
    function Tablesort(el, options) {
        if (!el) throw new Error('Element not found');
        if (el.tagName !== 'TABLE') throw new Error('Element must be a table');
        this.init(el, options || {});
    }

    Tablesort.prototype = {

        init: function(el, options) {
            var that = this,
                firstRow;
            this.table = el;
            this.thead = false;
            this.options = options;

            if (el.rows && el.rows.length > 0) {
                if (el.tHead && el.tHead.rows.length > 0) {
                    firstRow = el.tHead.rows[el.tHead.rows.length - 1];
                    that.thead = true;
                } else {
                    firstRow = el.rows[0];
                }
            }

            if (!firstRow) return;

            var onClick = function() {
                if (that.current && that.current !== this) {
                    that.current.classList.remove('sort-up');
                    that.current.classList.remove('sort-down');
                }

                that.current = this;
                that.sortTable(this);
            };

            var defaultSort;

            // Assume first row is the header and attach a click handler to each.
            for (var i = 0; i < firstRow.cells.length; i++) {
                var cell = firstRow.cells[i];
                if (!cell.classList.contains('no-sort')) {
                    cell.classList.add('sort-header');
                    cell.addEventListener('click', onClick, false);

                    if (cell.classList.contains('sort-default')) {
                        defaultSort = cell;
                    }
                }
            }

            if (defaultSort) {
                that.current = defaultSort;
                that.sortTable(defaultSort);
            }
        },

        getFirstDataRowIndex: function() {
            // If table does not have a <thead>, assume that first row is
            // a header and skip it.
            if (!this.thead) {
                return 1;
            } else {
                return 0;
            }
        },

        sortTable: function(header) {
            var that = this,
                column = header.cellIndex,
                sortFunction,
                item = '',
                items = [],
                i = that.getFirstDataRowIndex();

            that.table.dispatchEvent(createEvent('tablesort-pre-sort'));

            if (that.table.rows.length <= 1) return;

            while (items.length < 3 && i < that.table.tBodies[0].rows.length) {
                item = getInnerText(that.table.tBodies[0].rows[i].cells[column]);
                item = item.trim();
                // Exclude cell values where commented out HTML exists
                if (item.substr(0, 4) !== '<!--' && item.length !== 0) {
                    items.push(item);
                }
                i++;
            }

            if (!items) return;

            // Sort dot separated numbers, e.g. ip addresses or version numbers
            if (items.every(testDotSeparatedNumbers)) {
                sortFunction = sortDotSep;
            }
            // sort filesize, e.g. "123.45 MB"
            else if (items.every(testFilesize)) {
                sortFunction = sortFilesize;
            }
            // Sort as number if a currency key exists or number
            else if (items.every(testNumber)) {
                sortFunction = sortNumber;
            } else if (items.every(testDate)) {
                sortFunction = sortDate;
            } else {
                sortFunction = sortCaseInsensitive;
            }

            this.col = column;
            var newRows = [],
                noSorts = {},
                j,
                totalRows = 0;

            for (i = 0; i < that.table.tBodies.length; i++) {
                for (j = 0; j < that.table.tBodies[i].rows.length; j++) {
                    var tr = that.table.tBodies[i].rows[j];
                    if (tr.classList.contains('no-sort')) {
                        // keep no-sorts in separate list to be able to insert
                        // them back at their original position later
                        noSorts[totalRows] = tr;
                    } else {
                        // Save the index for stable sorting
                        newRows.push({
                            tr: tr,
                            td: tr.cells[that.col],
                            index: totalRows
                        });
                    }
                    totalRows++;
                }
            }

            var sortDir;
            if (header.classList.contains('sort-up')) sortDir = 'sort-down';
            else if (header.classList.contains('sort-down')) sortDir = 'sort-up';
            else sortDir = that.options.descending ? 'sort-up' : 'sort-down';
            header.classList.remove('sort-up');
            header.classList.remove('sort-down');
            header.classList.add(sortDir);

            // Before we append should we reverse the new array or not?
            // If we reverse, the sort needs to be `anti-stable` so that
            // the double negatives cancel out
            if (sortDir === 'sort-down') {
                newRows.sort(antiStabilize(sortFunction));
                newRows.reverse();
            } else {
                newRows.sort(stabilize(sortFunction));
            }

            // append rows that already exist rather than creating new ones
            var noSortsSoFar = 0;
            for (i = 0; i < totalRows; i++) {
                var whatToInsert;
                if (noSorts[i]) {
                    // We have a no-sort row for this position, insert it here.
                    whatToInsert = noSorts[i];
                    noSortsSoFar++;
                } else {
                    whatToInsert = newRows[i - noSortsSoFar].tr;
                }
                // appendChild(x) moves x if already present somewhere else in the DOM
                that.table.tBodies[0].appendChild(whatToInsert);
            }

            that.table.dispatchEvent(createEvent('tablesort-post-sort'));
        },

        refresh: function() {
            if (this.current !== undefined) {
                this.sortTable(this.current);
            }
        }
    };

    var createEvent = function(name) {
            var evt;

            if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
                evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent(name, false, false, undefined);
            } else {
                evt = new CustomEvent(name);
            }

            return evt;
        },

        testDotSeparatedNumbers = function(item) {
            return /^(\d+\.)+\d+$/.test(item);
        },

        testFilesize = function(item) {
            return /^\d+(\.\d+)? ?(K|M|G|T|P|E|Z|Y|B$)i?B?$/i.test(item);
        },

        testNumber = function(item) {
            return item.match(/^-?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) || // prefixed currency
                   item.match(/^-?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) || // suffixed currency
                   item.match(/^-?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/); // number
        },

        testDate = function(date) {
            return (
                date.search(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\.?\,?\s*/i) !== -1 ||
                date.search(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/) !== -1 ||
                date.search(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i) !== -1
            ) && !isNaN(parseDate(date));
        },

        sortCaseInsensitive = function(a, b) {
            a = getInnerText(a).toLowerCase();
            b = getInnerText(b).toLowerCase();

            if (a === b) return 0;
            if (a < b) return 1;

            return -1;
        },

        sortNumber = function(a, b) {
            a = cleanNumber(getInnerText(a));
            b = cleanNumber(getInnerText(b));

            return compareNumber(b, a);
        },

        sortDate = function(a, b) {
            a = getInnerText(a).toLowerCase();
            b = getInnerText(b).toLowerCase();

            return parseDate(b) - parseDate(a);
        },

        sortDotSep = function(a, b) {
            a = getInnerText(a).split('.');
            b = getInnerText(b).split('.');

            for (var i = 0, len = a.length, ai, bi; i < len; i++) {
                ai = parseInt(a[i], 10);
                bi = parseInt(b[i], 10);

                if (ai == bi) continue;
                if (ai > bi) return -1;
                if (ai < bi) return 1;
            }

            return 0;
        },

        sortFilesize = function(a, b) {
            a = filesize2num(getInnerText(a));
            b = filesize2num(getInnerText(b));

            return compareNumber(b, a);
        },

        // Make a stable sort function
        stabilize = function(sort) {
            return function(a, b) {
                var unstableResult = sort(a.td, b.td);
                if (unstableResult === 0) {
                    return a.index - b.index;
                }
                return unstableResult;
            };
        },
        
        // Make an `anti-stable` sort function. If two elements are equal
        // under the original sort function, then there relative order is
        // reversed.
        antiStabilize = function(sort) {
            return function(a, b) {
                var unstableResult = sort(a.td, b.td);
                if (unstableResult === 0) {
                    return b.index - a.index;
                }
                return unstableResult;
            };
        },

        parseDate = function(date) {
            date = date.replace(/\-/g, '/');
            date = date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, '$1/$2/$3'); // format before getTime

            return new Date(date).getTime();
        },

        getInnerText = function(el) {
            if (typeof el === 'string' || typeof el === 'undefined') return el;

            return el.getAttribute('data-sort') || el.textContent || el.innerText || '';
        },

        compareNumber = function(a, b) {
            a = parseFloat(a);
            b = parseFloat(b);

            a = isNaN(a) ? 0 : a;
            b = isNaN(b) ? 0 : b;

            return a - b;
        },

        cleanNumber = function(i) {
            return i.replace(/[^\-?0-9.]/g, '');
        },

        // Converts filesize to bytes
        // Ex. filesize2num("123 KB") -> 123000
        // Ex. filesize2num("123 KiB") -> 125952
        filesize2num = function(filesize) {
            var matches = filesize.match(/^(\d+(\.\d+)?) ?((K|M|G|T|P|E|Z|Y|B$)i?B?)$/i);

            var num    = parseFloat(cleanNumber(matches[1])),
                suffix = matches[3];

            return num * suffix2num(suffix);
        },

        // Returns suffix multiplier
        // Ex. suffix2num("KB") -> 1000
        // Ex. suffix2num("KiB") -> 1024
        suffix2num = function(suffix) {
            suffix = suffix.toLowerCase();
            var base = suffix[1] === "i" ? 1024 : 1000;

            switch(suffix[0]) {
                case "k":
                    return Math.pow(base, 2);
                case "m":
                    return Math.pow(base, 3);
                case "g":
                    return Math.pow(base, 4);
                case "t":
                    return Math.pow(base, 5);
                case "p":
                    return Math.pow(base, 6);
                case "e":
                    return Math.pow(base, 7);
                case "z":
                    return Math.pow(base, 8);
                case "y":
                    return Math.pow(base, 9);
                default:
                    return base;
            }
        };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Tablesort;
    } else {
        window.Tablesort = Tablesort;
    }
})();
