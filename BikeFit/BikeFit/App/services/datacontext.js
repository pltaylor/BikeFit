define(['durandal/system', 'services/model', 'config', 'services/logger'],
    function (system, model, config, logger) {
        var entityQuery = breeze.EntityQuery,
            manager = configureBreezeManager();
        
        var getManufacturers = function (manufacturerObservable) {
            var query = entityQuery.from('Manufacturers')
                .orderBy('name');

            return manager.executeQuery(query)
                .then(querySucceeded)
                .fail(queryFailed);

            function querySucceeded(data) {
                if (manufacturerObservable) {
                    manufacturerObservable(data.results);
                }
                log('Retrieved [Manufacturer] from remote data source',
                    data, true);
            }
        };
        
        var getBikeModels = function (bikeModelsObservable) {
            var query = entityQuery.from('BikeModels')
                .orderBy('name');

            return manager.executeQuery(query)
                .then(querySucceeded)
                .fail(queryFailed);

            function querySucceeded(data) {
                if (bikeModelsObservable) {
                    bikeModelsObservable(data.results);
                }
                log('Retrieved [Sessions] from remote data source',
                    data, true);
            }
        };

        var primeData = function () {
            return Q.all([getManufacturers()]);
        };

        var datacontext = {
            getManufacturers: getManufacturers,
            getBikeModels: getBikeModels,
            primeData: primeData
        };

        return datacontext;

        //#region Internal methods        
        function queryFailed(error) {
            var msg = 'Error retreiving data. ' + error.message;
            logger.logError(msg, error, system.getModuleId(datacontext), true);
        }

        function configureBreezeManager() {
            breeze.NamingConvention.camelCase.setAsDefault();
            var mgr = new breeze.EntityManager(config.remoteServiceName);
            model.configureMetadataStore(mgr.metadataStore);
            return mgr;
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(datacontext), showToast);
        }
        //#endregion
});