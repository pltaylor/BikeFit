define(['services/logger'],
    function (logger) {
        var self = this;

        self.pass = ko.observable();
        self.passwordConfirm = ko.observable();

        self.user = ko.observable();

        self.send = function () {
            var data = {
                userName: self.user(),
                password: self.pass(),
                confirmPassword: self.passwordConfirm()
            };

            return $.post("/Account/Register", data)
                .done(function (recievedData) {
                    logger.log('Registered', null, 'registered', false);
                });
        };

        var vm = {
            signUp: self.send,
            password: self.pass,
            passwordConfirm: self.passwordConfirm,
            userName: self.user
        };

        return vm;

        //#region Internal Methods
        function activate() {

        }
        //#endregion
    });