define(function() {

    var remoteServiceName = 'api/breeze';

    function xOffset(input) {
        return input + 250;
    }
    
    function yOffset(input) {
        return (295 - input);
    }
    var scalingFactor = .22;

    return {
        remoteServiceName: remoteServiceName,
        scalingFactor: scalingFactor,
        xOffset: xOffset,
        yOffset: yOffset
    };
})