define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Frequently Asked Questions'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('FAQ Activated', null, 'home', false);
        return true;
    }
    //#endregion
});