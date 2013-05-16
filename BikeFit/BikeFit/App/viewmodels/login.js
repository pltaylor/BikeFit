define(['services/logger',
        'durandal/plugins/router',
        'viewmodels/shell',
        'config'
        ],
    function (logger, router, shell, config) {
        var self = this;
        self.remember = ko.observable('true');
        
        self.pass = ko.observable();

        self.user = ko.observable();

        self.send = function () {
            var data = {
                userName: self.user(),
                password: self.pass(),
                rememberMe: self.remember()
            };
            
            return $.post("/Account/LogIn", data)
                .done(function (recievedData) {
                    if (recievedData == true) {
                        router.deactivate();
                        return router.map(config.routesLoggedIn);
                    } else {
                        router.deactivate();
                        return router.map(config.routes);
                    }
                }).done(function() {
                    router.activate('frames');
                    return router.navigateTo('#/frames');
                });
        };

        self.register = function() {
            var url = '#/register';
            router.navigateTo(url);
        };
        
        var vm = {
            logIn: self.send,
            password: self.pass,
            rememberMe: self.remember,
            //register: self.register,
            userName: self.user
        };

        return vm;

        //#region Internal Methods
        function activate() {
            
        }
        //#endregion
    });