define(['durandal/system',
        'plugins/router',
        'services/logger',
        'config',
        'services/datacontext'],
    function (system, router, logger, config, datacontext) {

        var adminRoutes = ko.computed(function () {
            return router.routes.filter(function (r) {
                return r.settings.admin;
            });
        });

        var isLoggedIn = ko.observable(false);

        var shell = {
            activate: activate,
            adminRoutes: adminRoutes,
            isAdmin: isLoggedIn,
            router: router
        };

        return shell;

        //#region Internal Methods
        function activate() {
            return datacontext.primeData()
                .then(boot)
                .fail(failedInitialization);
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
        }

        function goToAdmin(item) {
            router.navigate(item.hash);
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