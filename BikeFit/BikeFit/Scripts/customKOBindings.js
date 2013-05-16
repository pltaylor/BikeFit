ko.bindingHandlers.date = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        try {
            var jsonDate = ko.utils.unwrapObservable(valueAccessor());
            var value = parseJsonDateString(jsonDate);
            var strDate = value.getMonth() + 1 + "/"
                            + value.getDate() + "/"
                            + value.getFullYear();
            element.setAttribute('value', strDate);
        }
        catch (exc) {
        }
        $(element).change(function () {
            var value = valueAccessor();
            value(element.getAttribute('value'));
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var val = valueAccessor();
        val(element.getAttribute('value'));
    }
};

var jsonDateRE = /^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;
var parseJsonDateString = function (value) {
    var arr = value && jsonDateRE.exec(value);
    if (arr) {
        return new Date(parseInt(arr[1]));
    }
    return value;
};

ko.bindingHandlers.moment = {
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        var formattedValue = ko.utils.unwrapObservable(value).format('LLLL');
        $(element).text(formattedValue);
    }
};