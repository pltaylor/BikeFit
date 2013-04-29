define(['durandal/system',
        'durandal/plugins/router',
        'services/logger',
        'services/datacontext'],
    function (system, router, logger, datacontext) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return datacontext.primeData()
                .then(boot)
                .fail(failedInitialization);
        }

        function boot() {
            router.mapNav('home');
            router.mapNav('frames');
            router.mapNav('frameAdmin');
            log('My Bike Fit Loaded!', null, true);
            return router.activate('home');
        }

        function failedInitialization(error) {
            var msg = 'App initialization failed: ' + error.message;
            logger.logError(msg, error, system.getModuleId(shell), true);
        }
        
        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });