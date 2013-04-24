define([], function () {
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
    };

    function bikeModelInitializer(bikeModel) {
        //Add computed observables here
    };
    
    function bikeSizeInitializer(bikeSize) {
        //Add computed observables here
    }
    
    //#endregion
});