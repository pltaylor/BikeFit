define(['services/logger',
        'plugins/router',
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
                        router.reset();
                        return router.map(config.routesLoggedIn) // Map the routes
                            .buildNavigationModel(); // Finds all nav routes and readies them
                    } else {
                        //router.deactivate();
                        router.reset();
                        return router.map(config.routes) // Map the routes
                            .buildNavigationModel(); // Finds all nav routes and readies them
                    }
                }).done(function() {
                    return router.navigate('#');
                });
        };
        
        var vm = {
            logIn: self.send,
            password: self.pass,
            rememberMe: self.remember,
            userName: self.user
        };

        return vm;
    });