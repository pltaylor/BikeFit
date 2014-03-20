define(['services/logger',
        'plugins/router',
        'viewmodels/shell',
        'config'
],
    function (logger, router, shell, config) {
        var vm = {
            activate: activate
        };

        return vm;

        //#region Internal Methods
        function activate() {
            return $.post("/Account/LogOff")
                .done(function (recievedData) {
                    if (recievedData == true) {
                        //router.deactivate();
                        router.reset();
                        logger.log('You were logged out.', null, 'Log Out', true);
                        return router.map(config.routes) // Map the routes
                            .buildNavigationModel(); // Finds all nav routes and readies them
                    } else {
                        logger.error('You were not logged out.', null, 'Log Out', true);
                        return true;
                    }
                }).done(function () {
                    return router.navigate('#');
                });
        }
        //#endregion
    });