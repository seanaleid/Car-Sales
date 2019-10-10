export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = feature => {
    console.log(`Actions Index.js ADD_FEATURE logic`, feature);
    return { type: ADD_FEATURE, payload: feature};
}