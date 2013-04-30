define(['services/logger',
        "services/datacontext"],
    function (logger, datacontext) {
        var manufacturers = ko.observableArray();
        var manufacturer = ko.observable();

        manufacturer.subscribe(function (newValue) {
            datacontext.getBikeModels(models, newValue.manufacturerID()).then(fillSizes);

            function fillSizes() {
                for (var i = 0; i < models().length; i++) {
                    datacontext.getBikeSizes(models()[i].sizes, models()[i].bikeModelID());
                }
            }

        });

        var models = ko.observableArray();
        var model = ko.observable();

        var vm = {
            activate: activate,
            manufacturer: manufacturer,
            manufacturers: manufacturers,
            model: model,
            models: models
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