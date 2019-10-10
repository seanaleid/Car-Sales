export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = store => {
    console.log(`Actions Index.js ADD_FEATURE logic`, store);
    return { type: ADD_FEATURE };
};