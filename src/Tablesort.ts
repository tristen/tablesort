
/**
 * From https://github.com/tristen/tablesort
 */
type CompareFn = (a: string, b: string) => number;

const sortOptions: {
	name: string;
	pattern?: ((s: string) => boolean);
	sort: CompareFn;
}[] = [
	{
		name: "number",
		sort: (a: string, b: string) => {
			let aa = parseFloat(a);
			let bb = parseFloat(b);
			aa = isNaN(aa) ? 0 : aa;
			bb = isNaN(bb) ? 0 : bb;
			return aa - bb;
		}
	}
];

const createEvent = (name: string) => {
	if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
		const evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(name, false, false, undefined);
		return evt;
	} else {
		return new CustomEvent(name);
	}
};

const getInnerText = (el: HTMLTableHeaderCellElement): string => {
	return el.getAttribute('data-sort') || el.textContent || el.innerText || '';
};

// Default sort method if no better sort method is found
const caseInsensitiveSort: CompareFn = (a, b) => {
	a = a.trim().toLowerCase();
	b = b.trim().toLowerCase();

	if (a === b) return 0;
	if (a < b) return 1;

	return -1;
};

const getCellByKey = (cells: HTMLCollectionOf<HTMLTableDataCellElement | HTMLTableHeaderCellElement>, key: string) => {
	return [...cells].find((cell) => {
		return cell.getAttribute('data-sort-column-key') === key;
	});
};

// Stable sort function
// If two elements are equal under the original sort function,
// then there relative order is reversed
const stabilize = (sort, antiStabilize) => {
	return function (a, b) {
		const unstableResult = sort(a.td, b.td);
		
		if (unstableResult === 0) {
			if (antiStabilize) {
				return b.index - a.index;
			}
			return a.index - b.index;
		}
		
		return unstableResult;
	};
};


export class Tablesort {
	private current:     HTMLTableCellElement | undefined;
	private defaultSort: HTMLTableCellElement | undefined;
	
	constructor(
		public el: HTMLTableElement,
		public options: {
			descending?: boolean;
		} = {}
	) {
		let firstRow: HTMLTableRowElement | undefined;
		if (el.rows && el.rows.length > 0) {
			if (el.tHead && el.tHead.rows.length > 0) {
				firstRow = 
					[...el.tHead.rows].find(row => row.getAttribute('data-sort-method') === 'thead')
					?? el.tHead.rows[el.tHead.rows.length - 1]
				;
			} else {
				firstRow = el.rows[0];
			}
		}
		
		if (! firstRow) {
			return;
		}
		
		/// Assume first row is the header and attach a click handler to each cell.
		for (const cell of firstRow.cells) {
			cell.setAttribute('role', 'columnheader');
			if (cell.getAttribute('data-sort-method') !== 'none') {
				cell.tabIndex = 0;
				cell.addEventListener('click', () => {
					if (this.current && this.current !== cell) {
						this.current.removeAttribute('aria-sort');
					}
					this.current = cell;
					this.sortTable(cell);
				}, false);
				
				if (cell.getAttribute('data-sort-default') !== null) {
					this.defaultSort = cell;
				}
			}
		}
		
		if (this.defaultSort) {
			this.current = this.defaultSort;
			this.sortTable(this.defaultSort);
		}
	}
	
	hasThead(): boolean {
		return (this.el.tHead?.rows.length ?? 0) > 0;
	}
	
	sortTable(header: HTMLTableHeaderCellElement, update = false) {
		const columnKey = header.getAttribute('data-sort-column-key');
		const column = header.cellIndex;
		let sortFunction = caseInsensitiveSort;
		const items: string[] = [];
		const sortMethod = header.getAttribute('data-sort-method');
		let sortOrder = header.getAttribute('aria-sort');
		
		this.el.dispatchEvent(createEvent('beforeSort'));
		
		// If updating an existing sort, direction should remain unchanged.
		if (update === false) {
			if (sortOrder === 'ascending') {
				sortOrder = 'descending';
			} else if (sortOrder === 'descending') {
				sortOrder = 'ascending';
			} else {
				sortOrder = this.options.descending ? 'descending' : 'ascending';
			}
			
			header.setAttribute('aria-sort', sortOrder);
		}
		
		if (this.el.rows.length < 2) {
			return;
		}
		
		// If we force a sort method, it is not necessary to check rows
		if (! sortMethod) {
			let i = this.hasThead() ? 0 : 1;
			while (items.length < 3 && i < this.el.tBodies[0].rows.length) {
				const cell = (columnKey)
					? getCellByKey(this.el.tBodies[0].rows[i].cells, columnKey)
					: this.el.tBodies[0].rows[i].cells[column]
				;
				
				// Treat missing cells as empty cells
				let item = cell ? getInnerText(cell) : "";
				item = item.trim();

				if (item.length > 0) {
					items.push(item);
				}
				
				i++;
			}
			
			if (!items) {
				return;
			}
		}
		
		for (const item of sortOptions) {
			if (sortMethod) {
				if (item.name === sortMethod) {
					sortFunction = item.sort;
					break;
				}
			} else if (item.pattern && items.every(item.pattern)) {
				sortFunction = item.sort;
				break;
			}
		}
		for (const tBody of this.el.tBodies) {
			const newRows: Obj[] = [];
			const noSorts: HTMLTableRowElement[] = [];
			let totalRows = 0;
			let noSortsSoFar = 0;
			
			if (tBody.rows.length < 2) {
				continue;
			}
			
			for (const row of tBody.rows) {
				
				if (row.getAttribute('data-sort-method') === 'none') {
					// keep no-sorts in separate list to be able to insert
					// them back at their original position later
					noSorts[totalRows] = row;
				} else {
					const cell = (columnKey)
						? getCellByKey(row.cells, columnKey)
						: row.cells[column]
					;
					// Save the index for stable sorting
					newRows.push({
						tr: row,
						td: cell ? getInnerText(cell) : "",
						index: totalRows,
					});
				}
				totalRows++;
			}
			// Before we append should we reverse the new array or not?
			// If we reverse, the sort needs to be `anti-stable` so that
			// the double negatives cancel out
			if (sortOrder === 'descending') {
				newRows.sort(stabilize(sortFunction, true));
			} else {
				newRows.sort(stabilize(sortFunction, false));
				newRows.reverse();
			}

			// append rows that already exist rather than creating new ones
			for (let j = 0; j < totalRows; j++) {
				let item: HTMLTableRowElement;
				if (noSorts[j]) {
					// We have a no-sort row for this position, insert it here.
					item = noSorts[j];
					noSortsSoFar++;
				} else {
					item = newRows[j - noSortsSoFar].tr;
				}
				
				// appendChild(x) moves x if already present somewhere else in the DOM
				tBody.appendChild(item);
			}
		}
		
		this.el.dispatchEvent(createEvent('afterSort'));
	}
	
	refresh() {
		if (this.current !== undefined) {
			this.sortTable(this.current, true);
		}
	}
}
