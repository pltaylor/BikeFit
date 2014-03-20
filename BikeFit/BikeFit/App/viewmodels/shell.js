define(['durandal/system',
        'plugins/router',
        'services/logger',
        'config',
        'services/datacontext'],
    function (system, router, logger, config, datacontext) {

        //var adminRoutes = ko.computed(function () {
        //    return router.allRoutes().filter(function (r) {
        //        return r.settings.admin;
        //    });
        //});

        //var isLoggedIn = ko.observable(false);

        var shell = {
            activate: activate,
            router: router
        };

        return shell;

        //#region Internal Methods
        function activate() {
            datacontext.primeData()
                .then(boot)
                .fail(failedInitialization);
            return boot();
        }

        function checkLogin() {
            return $.post("/Account/IsLoggedIn")
                .done(function (recievedData) {
                    if (recievedData == true) {
                        return router.map(config.routesLoggedIn)           // Map the routes
                .buildNavigationModel() // Finds all nav routes and readies them
                .activate();            // Activate the router
                    } else {
                        return router.map(config.routes)           // Map the routes
                .buildNavigationModel() // Finds all nav routes and readies them
                .activate();            // Activate the router
                    }
                });
        }

        function boot() {
            log('My Tri Bike Fit Loaded!', null, false);
            router.on('router:route:not-found', function (fragment) {
                logError('No Route Found', fragment, true);
            });

            return checkLogin();

            //return router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
            //    .map(config.routesLoggedIn)            // Map the routes
            //    .buildNavigationModel() // Finds all nav routes and readies them
            //    .activate();            // Activate the router
        }

        function goToAdmin(item) {
            router.navigateTo(item.hash);
        }

        function failedInitialization(error) {
            var msg = 'App initialization failed: ' + error.message;
            logger.logError(msg, error, system.getModuleId(shell), true);
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }

        function logError(msg, data, showToast) {
            logger.logError(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });