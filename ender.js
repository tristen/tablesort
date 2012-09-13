!function ($) {
    $.ender({
        tablesort: function (options) {
            return this.forEach(function (el) {
                new Tablesort(el, options);
            });
        }
    }, true);
}(ender);
