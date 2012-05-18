//  tablesort.js
//  tristen @fallsemo

function Tablesort(el) {
    el.tagName === 'TABLE' ? this.init(el) : console.error('Element must be a table');
}

Tablesort.prototype = {
    thead: false,
    col: undefined,
    init: function(el) {
        var that = this;
        var firstRow;
        if (el.rows && el.rows.length > 0) {
            if (el.tHead && el.tHead.rows.length > 0) {
                firstRow = el.tHead.rows[el.tHead.rows.length -1];
                that.thead = true;
            } else {
                firstRow = el.rows[0];
            }
        }
        if (!firstRow) { return; }

        //  Assume first row is the header and attach a click handler to each.
        for (var i = 0; i < firstRow.cells.length; i++) {
            var cell = firstRow.cells[i];
            cell.className += ' sort-header';
            this.addEvent(cell, 'click', function(e) {
                // Delete any sort classes on table headers that are not the current one.
                var siblings = that.getParent(cell, 'tr').getElementsByTagName('th');
                for (var i = 0; i < siblings.length; i++) {
                    if (that.hasClass(siblings[i], 'sort-up') || that.hasClass(siblings[i], 'sort-down')) {
                        if (siblings[i] !== this) {
                            siblings[i].className = siblings[i].className
                                                    .replace(' sort-up', '')
                                                    .replace(' sort-down', '');
                        }
                    }
                }
                that.sortTable(this);
            });
        }
    },
    sortTable: function(header) {
        var that = this;
        var column = header.cellIndex;
        var t = this.getParent(header, 'table');
        var sortCaseInsensitive = function(a, b) {
            var aa = that.getInnerText(a.cells[that.col]).toLowerCase();
            var bb = that.getInnerText(b.cells[that.col]).toLowerCase();
            if (aa === bb)  { return 0;  }
            if (aa < bb)    { return -1; }
            return 1;
        }
        var sortNumber = function(a, b) {
            var aa = that.getInnerText(a.cells[that.col]);
            aa = that.cleanNumber(aa);
            var bb = that.getInnerText(b.cells[that.col]);
            bb = that.cleanNumber(bb);
            return that.compareNumber(aa, bb);
        }

        // Work out a type for the column
        if (t.rows.length <= 1) return;
        var item = '';
        var i = 0;
        while (item === '' && i < t.tBodies[0].rows.length) {
            var item = that.getInnerText(t.tBodies[0].rows[i].cells[column]);
            item = that.trim(item);
            if (item.substr(0,4) === '<!--' || item.length === 0) {
                item = '';
            }
            i++;
        }
        if (item === '') return;
        var sortFunction;
        // Sort as number if a currency key exists or number
        if (item.match(/^-?[£$Û¢´]\d/) || item.match(/^-?(\d+[,\.]?)+(E[-+][\d]+)?%?$/)) {
            sortFunction = sortNumber;
        } else {
            sortFunction = sortCaseInsensitive;
        }
        this.col = column;
        var firstRow = [], newRows = [];

        for (var k = 0; k < t.tBodies.length; k++) {
            for (var i = 0; i < t.tBodies[k].rows[0].length; i++) {
                firstRow[i] = t.tBodies[k].rows[0][i];
            }
        }
        for (var k = 0; k < t.tBodies.length; k++) {
            if (!that.thead) {
                // skip the first row
                for (var j = 1; j < t.tBodies[k].rows.length; j++) {
                    newRows[j-1] = t.tBodies[k].rows[j];
                }
            } else {
                // don't skip the first row
                for (var j = 0; j < t.tBodies[k].rows.length; j++) {
                    newRows[j] = t.tBodies[k].rows[j];
                }
            }
        }
        newRows.sort(sortFunction);

        if (that.hasClass(header, 'sort-up')) {
            header.className = header.className.replace(/ sort-up/, '');
            header.className += ' sort-down';
        } else {
            header.className = header.className.replace(/ sort-down/, '');
            header.className += ' sort-up';
            newRows.reverse();
        }

        // append rows that already exist rather than creating new ones
        for (var i = 0; i < newRows.length; i++) {
            if (!newRows[i].className) {
                t.tBodies[0].appendChild(newRows[i]);
            }
        }
    },
    getInnerText: function(el) {
        var that = this;
        if (typeof el === 'string' || typeof el === 'undefined') return el;
        if (el.innerText) return el.innerText;
        var str = '';
        var cs = el.childNodes;
        var l = cs.length;
        for (var i = 0; i < l; i++) {
            switch (cs[i].nodeType) {
                case 1: // ELEMENT_NODE
                str += that.getInnerText(cs[i]);
                break;
                case 3:	// TEXT_NODE
                str += cs[i].nodeValue;
                break;
            }
        }
        return str;
    },
    getParent: function(el, pTagName) {
        if (el === null) {
            return null;
        } else if (el.nodeType === 1 && el.tagName.toLowerCase() === pTagName.toLowerCase()) {
            return el;
        } else {
            return this.getParent(el.parentNode, pTagName);
        }
    },
    compareNumber: function(a, b) {
        var a = parseFloat(a);
        a = (isNaN(a) ? 0 : a);
        var b = parseFloat(b);
        b = (isNaN(b) ? 0 : b);
        return a - b;
    },
    trim: function(s) {
        return s.replace(/^\s+|\s+$/g, '');
    },
    cleanNumber: function(i) {
        return i.replace(/[^-?0-9.]/g, '');
    },
    hasClass: function(el, c) {
        return (' ' + el.className + ' ').indexOf(' ' + c + ' ') > -1;
    },
    // http://ejohn.org/apps/jselect/event.html
    addEvent: function(object, event, method) {
        if (object.attachEvent) {
            object['e' + event + method] = method;
            object[event + method] = function(){object['e' + event + method](window.event);}
            object.attachEvent('on' + event, object[event + method]);
        } else {
        object.addEventListener(event, method, false);
        }
    }
};
