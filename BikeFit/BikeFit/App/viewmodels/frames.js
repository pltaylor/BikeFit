define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Frames'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Frames View Activated', null, 'frames', true);
        return true;
    }
    //#endregion
});