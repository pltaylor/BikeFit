define(['services/logger',
        'services/datacontext'],
    function (logger, datacontext) {
        var rememberMe = ko.observable('true');
        
        var password = ko.observable();

        var userName = ko.observable();
        
        var vm = {
            password: password,
            rememberMe: rememberMe,
            userName: userName
        };

        return vm;

        //#region Internal Methods
        function activate() {
            
        }

        //#endregion
    });