define(['services/logger',
        "services/datacontext"],
    function (logger, datacontext) {
        var manufacturers = ko.observableArray();
        var manufacturer = ko.observable();
        
        manufacturer.subscribe(function (newValue) {
            datacontext.getBikeModels(models, newValue.manufacturerID());
        });
        
        var models = ko.observableArray();
        var model = ko.observable();
        
        var sizes = ko.observableArray();
        
        var vm = {
            activate: activate,
            manufacturer: manufacturer,
            manufacturers: manufacturers,
            model: model,
            models: models,
            sizes: sizes
        };

        return vm;

        //#region Internal Methods
        function activate() {
            manufacturers(datacontext.lookups.manufacturers);
            logger.log('Frames View Activated', null, 'frames', false);
            return true;
        }
        
        
        //#endregion
    });