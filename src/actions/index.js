export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (passedData, currentState) => {
    console.log(`Actions Index.js ADD_FEATURE logic`, passedData);
    return { type: ADD_FEATURE, payload: currentState};
}