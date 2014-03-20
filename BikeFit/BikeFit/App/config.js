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
        route: '',
        moduleId: 'viewmodels/frames',
        title: 'Frames',
        nav: true
    }, {
        route: 'fullBike',
        moduleId: 'viewmodels/fullBike',
        title: 'Full Bike',
        nav: true
    }, {
        route: 'faq',
        moduleId: 'viewmodels/faq',
        title: 'FAQ',
        nav: true
    }, {
        route: 'login',
        moduleId: 'viewmodels/login',
        title: 'Log In',
        nav: true
    }];
    
    var routesLoggedIn = [{
        route: '',
        moduleId: 'viewmodels/frames',
        title: 'Frames',
        nav: true
    }, {
        route: 'fullBike',
        moduleId: 'viewmodels/fullBike',
        title: 'Full Bike',
        nav: true
    }, {
        route: 'faq',
        moduleId: 'viewmodels/faq',
        title: 'FAQ',
        nav: true
    }, {
        route: 'login',
        moduleId: 'viewmodels/login',
        title: 'Log In',
        nav: false
    }, {
        route: 'logout',
        moduleId: 'viewmodels/logout',
        title: 'Log Out',
        nav: true
    }, {
        route: 'register',
        moduleId: 'viewmodels/register',
        title: 'Register',
        nav: true
    }, {
        route: 'frameAdmin',
        moduleId: 'viewmodels/frameAdmin',
        title: 'Frame Admin',
        nav: true
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