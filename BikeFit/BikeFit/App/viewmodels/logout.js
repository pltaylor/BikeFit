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
                        router.deactivate();
                        logger.log('You were logged out.', null, 'Log Out', true);
                        return router.map(config.routes);
                    } else {
                        logger.error('You were not logged out.', null, 'Log Out', true);
                        return true;
                    }
                }).done(function () {
                    router.activate('frames');
                    return router.navigateTo('#/frames');
                });
        }
        //#endregion
    });