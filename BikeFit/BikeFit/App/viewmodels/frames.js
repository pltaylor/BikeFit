define(['services/logger',
        "services/datacontext"],
    function (logger, datacontext) {
    var manufacturers = ko.observableArray();

    var frame1 = createFrame();
    var frame2 = createFrame();
    var frame3 = createFrame();

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
        datacontext.getManufacturers(manufacturers).then(
            //manufacturers.unshift(ko.observable({ name: 'Please Select One...' }))
        );
        logger.log('Frames View Activated', null, 'frames', true);
        return true;
    }
        
    function createFrame() {
        var manufacturer = ko.observable();
        manufacturer.subscribe(function(newValue) {
            datacontext.getBikeModels(models, newValue.manufacturerID());
        });
        
        var models = ko.observableArray();
        var model = ko.observable();
        model.subscribe(function(newValue) {
            datacontext.getBikeSizes(sizes, newValue.bikeModelID());
        });

        var sizes = ko.observableArray();
        var size = ko.observable();
        size.subscribe(function() {
            // do all sorts of fun drawing stuff here.
        });

        var output = {
            manufacturer: manufacturer,
            models: models,
            model: model,
            sizes: sizes,
            size: size
        };
        return output;
    }
    //#endregion
});