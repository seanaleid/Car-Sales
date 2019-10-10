import { ADD_FEATURE } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const mainReducer = (state = initialState, action) => {
    console.log(`This is initialState and action from mainReducer.js`, state, action)
    console.log(action.payload);
    switch(action.type) {
        case ADD_FEATURE:
            console.log(`Adding feature to car`, state)
            return {
                ...state,
                // additionalPrice: (state.additionalPrice + action.payload),
                car: {
                    ...state.car, 
                    price: state.car.price + action.payload.price,
                    features: [
                        ...state.car.features, 
                        action.payload
                    ]
                },
                store: state.store.filter(item => {
                    return item.id !== action.payload.id
                })  
            }
        default: return state;
    }
}

export default mainReducer;