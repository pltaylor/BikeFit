define(['services/logger',
        'services/datacontext'],
    function (logger, datacontext) {
        var manufacturers = ko.observableArray();
        var manufacturer = ko.observable();
        var isSaving = ko.observable(false);
        var modelsWithSizes = ko.observableArray();

        manufacturer.subscribe(function (newValue) {
            datacontext.getBikeModelsWithSizes(modelsWithSizes, newValue.manufacturerID());
        });

        var createNewModel = function() {
            var manufacturerId = this.manu().manufacturerID();
            var result = datacontext.createNewModel(manufacturerId);
            return modelsWithSizes.push(result);
        };
        
        var hasChanges = ko.computed(function () {
            return datacontext.hasChanges();
        });

        var cancel = function () {
            var rejectedChanges = datacontext.cancelChanges();
            for (var i = 0; i < modelsWithSizes().length; i++) {
                modelsWithSizes()[i].sizes.valueHasMutated();
            }
            
            for (var i = 0; i < rejectedChanges.length; i++) {
                modelsWithSizes.remove(rejectedChanges[i]);
            }
        };

        var canSave = ko.computed(function () {
            return hasChanges() && !isSaving();
        });

        var save = function () {
            isSaving(true);
            return datacontext.saveChanges().fin(complete);

            function complete() {
                isSaving(false);
            }
        };
        
        var canCreateNewModel = ko.computed(function() {
            if (manufacturer() == null) {
                return false;
            }
            var manufacturerId = manufacturer().manufacturerID();
            if (manufacturerId == '00000000-0000-0000-0000-000000000000') {
                return false;
            }
            return true;
        });
        
        var canDeactivate = function () {
            if (hasChanges()) {
                var title = 'Do you want to leave ?';
                var msg = 'Navigate away and cancel your changes?';
                var checkAnswer = function (selectedOption) {
                    if (selectedOption === 'Yes') {
                        cancel();
                    }
                    return selectedOption;
                };
                return app.showMessage(title, msg, ['Yes', 'No'])
                    .then(checkAnswer);

            }
            return true;
        };

        var wheelSizes = ko.observableArray([
            { name: '700c', value: 'SevenHundred' },
            { name: '650c', value: 'SixFifty' }
        ]);

        var vm = {
            activate: activate,
            cancel: cancel,
            canCreateNewModel: canCreateNewModel,
            canDeactivate: canDeactivate,
            canSave: canSave,
            createNewModel: createNewModel,
            hasChanges: hasChanges,
            manu: manufacturer,
            manufacturers: manufacturers,
            modelsWithSizes: modelsWithSizes,
            save: save,
            wheelSizes: wheelSizes
        };

        return vm;

        //#region Internal Methods
        function activate() {
            var manufacturesPromise = datacontext.lookups.manufacturers();
            logger.log('Frames Admin View Activated', null, 'frames', false);

            return $.when(manufacturesPromise).then(function (results) {
                manufacturers(results);
            });
        }

        //#endregion
    });