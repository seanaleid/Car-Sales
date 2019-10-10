export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = feature => {
    console.log(`Actions Index.js ADD_FEATURE logic`, feature);
    return { type: ADD_FEATURE, payload: feature};
}

export const DELETE_FEATURE = "DELETE_FEATURE";
export const deleteFeature = feature => {
    console.log(`delete feature action`, feature);
    return {type: DELETE_FEATURE, payload: feature};
}