define(function() {

    var remoteServiceName = 'breeze/breeze';

    function xOffset(input) {
        return input + 250;
    }
    
    function yOffset(input) {
        return (245 - input);
    }
    
    var scalingFactor = .22;
    
    var routes = [{
        url: 'frames',
        moduleId: 'viewmodels/frames',
        name: 'Frames',
        visible: true,
        caption: 'Frames'
    }, {
        url: 'fullBike',
        moduleId: 'viewmodels/fullBike',
        name: 'Full Bike',
        visible: true,
        caption: 'Full Bike'
    }, {
        url: 'faq',
        moduleId: 'viewmodels/faq',
        name: 'FAQ',
        visible: true,
        caption: 'FAQ'
    }, {
        url: 'login',
        moduleId: 'viewmodels/login',
        name: 'Log In',
        visible: true,
        caption: 'Log In'
    }];
    
    var routesLoggedIn = [{
        url: 'frames',
        moduleId: 'viewmodels/frames',
        name: 'Frames',
        visible: true,
        caption: 'Frames'
    }, {
        url: 'fullBike',
        moduleId: 'viewmodels/fullBike',
        name: 'Full Bike',
        visible: true,
        caption: 'Full Bike'
    }, {
        url: 'faq',
        moduleId: 'viewmodels/faq',
        name: 'FAQ',
        visible: true,
        caption: 'FAQ'
    }, {
        url: 'login',
        moduleId: 'viewmodels/login',
        name: 'Log In',
        visible: false,
        caption: 'Log In'
    }, {
        url: 'logout',
        moduleId: 'viewmodels/logout',
        name: 'Log Out',
        visible: true,
        caption: 'Log Out'
    }, {
        url: 'register',
        moduleId: 'viewmodels/register',
        name: 'Register',
        visible: true,
        caption: 'Register'
    }, {
        url: 'frameAdmin',
        moduleId: 'viewmodels/frameAdmin',
        name: 'Frame Admin',
        visible: true,
        caption: 'Frame Admin'
    }];

    return {
        remoteServiceName: remoteServiceName,
        routes: routes,
        routesLoggedIn: routesLoggedIn,
        scalingFactor: scalingFactor,
        xOffset: xOffset,
        yOffset: yOffset
    };
})