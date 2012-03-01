!function ($) {
    $.ender({
        tablesort: function () {
            return this.forEach(function (el) {
                new Tablesort(el);
            });
        }
    }, true);
}(ender);
