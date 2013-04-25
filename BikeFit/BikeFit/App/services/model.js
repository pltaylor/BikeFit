define(['config'], function (config) {
    var model = {
        configureMetadataStore: configureMetadataStore
    };

    return model;

    //#region Internal Methods
    function configureMetadataStore(metadataStore) {
        metadataStore.registerEntityTypeCtor(
            'Manufacturer', null, manufacturerInitializer);
        metadataStore.registerEntityTypeCtor(
            'BikeModel', null, bikeModelInitializer);
        metadataStore.registerEntityTypeCtor(
            'BikeSize', null, bikeSizeInitializer);
    }

    function manufacturerInitializer(manufacturer) {
        //Add computed observables here
    }

    function bikeModelInitializer(bikeModel) {
        //Add computed observables here
    }

    function bikeSizeInitializer(bikeSize) {
        bikeSize.bbXloc = ko.computed(function () {
            return 0.0 + config.xOffset;
        });

        // based off a 700cc wheel with a 23mm tire and 650 wheel with 23mm tire
        bikeSize.wheelRadius = ko.computed(function () {
            if (bikeSize.wheelSize() == "SevenHundred") {
                return 668 / 2;
            }
            return 617.0 / 2;
        });

        bikeSize.bbYloc = ko.computed(function () {
            return bikeSize.wheelRadius() - bikeSize.bottomBracketDrop();
        });

        bikeSize.headTubeTopXloc = ko.computed(function() {
            return bikeSize.bbXloc() + bikeSize.reach();
        });

        bikeSize.headTubeTopYloc = ko.computed(function () {
            return bikeSize.bbYloc() + bikeSize.stack();
        });

        bikeSize.headTubeBottomXloc = ko.computed(function () {
            var xDelta = Math.sin((90 - bikeSize.headTubeAngle()) * (Math.PI / 180)) * bikeSize.headTubeLength();
            return bikeSize.headTubeTopXloc() + xDelta;
        });

        bikeSize.headTubeBottomYloc = ko.computed(function () {
            var yDelta = Math.cos((90 - bikeSize.headTubeAngle()) * (Math.PI / 180)) * bikeSize.headTubeLength();
            return bikeSize.headTubeTopYloc() - yDelta;
        });

        bikeSize.rearWheelXloc = ko.computed(function () {
            return -Math.sqrt(Math.pow(bikeSize.rearCenter(), 2) - Math.pow(bikeSize.bottomBracketDrop(), 2));
        });

        bikeSize.rearWheelYloc = ko.computed(function () {
            return bikeSize.wheelRadius();
        });

        bikeSize.frontWheelXloc = ko.computed(function () {
            return Math.sqrt(Math.pow(bikeSize.frontCenter(), 2) - Math.pow(bikeSize.bottomBracketDrop(), 2));
        });

        bikeSize.frontWheelYloc = ko.computed(function () {
            return bikeSize.wheelRadius();
        });

        bikeSize.avgSeatTubeAngle = ko.computed(function () {
            return (bikeSize.maxSeatAngle() + bikeSize.minSeatAngle()) / 2;
        });

        bikeSize.seatTubeXloc = ko.computed(function () {
            var xDelta = Math.tan((90 - bikeSize.avgSeatTubeAngle()) * (Math.PI / 180)) * bikeSize.stack();
            return bikeSize.bbXloc() - xDelta;
        });

        bikeSize.seatTubeYloc = ko.computed(function () {
            return bikeSize.headTubeTopYloc();
        });
    }

    //#endregion
});