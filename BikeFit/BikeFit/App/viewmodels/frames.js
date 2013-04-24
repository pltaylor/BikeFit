define(['services/logger',
        "services/datacontext"],
    function (logger, datacontext) {
    var manufacturers = ko.observableArray();

    var frame1 = ko.observable(true);
    var frame2 = ko.observable(true);
    var frame3 = ko.observable(true);

    var vm = {
        activate: activate,
        frame1: frame1,
        frame2: frame2,
        frame3: frame3,
        manufacturers: manufacturers,
        title: 'Frames'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        datacontext.getManufacturers(manufacturers);
        logger.log('Frames View Activated', null, 'frames', true);
        return true;
    }
    //#endregion
});