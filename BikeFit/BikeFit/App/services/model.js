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
        
    };

    function bikeModelInitializer(bikeModel) {
        
    };
    
    function bikeSizeInitializer(bikeSize) {
        
    }
    
    //#endregion
});