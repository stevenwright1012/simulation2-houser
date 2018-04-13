const initialState ={
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    image_url: '',
    monthlyMortgage: '',
    desiredRent: ''
}

const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE';
const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO';
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE';
const CANCEL = 'CANCEL';

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_STEP_ONE:
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode
            });
        case UPDATE_STEP_TWO:
            return Object.assign({}, state, {image_url: action.payload});

        case UPDATE_STEP_THREE:
            return Object.assign({}, state, {
                monthlyMortgage: action.payload.monthlyMortgage,
                desiredRent: action.payload.desiredRent
            });
        case CANCEL:
            return Object.assign({}, action.payload)
        default:
            return state
    }
}

export function updateStepOne(name, address, city, state, zipcode){
    return{
        type: UPDATE_STEP_ONE,
        payload: {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }
    }
}

export function updateStepTwo(image){
    return{
        type: UPDATE_STEP_TWO,
        payload: image
    }
}
export function updateStepThree(mortgage, rent){
    return{
        type: UPDATE_STEP_THREE,
        payload: {
            monthlyMortgage: mortgage,
            desiredRent: rent
        }
    }
}
export function cancel(){
    return{
        type: CANCEL,
        payload: initialState
    }
}