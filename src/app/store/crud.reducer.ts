import { ADD_DATA_ON_LIST, crudActions, GET_ALL_DATA_FROM_LIST, REMOVE_DATA_FROM_LIST, UPDATE_DATA_ON_LIST } from "./crud.action";
const initialState: Array<any> = [];

export function crudReducer (
    state: Array<any> = initialState,
    action:crudActions
) {

    switch(action.type) {
        case GET_ALL_DATA_FROM_LIST:
            return [...state]
        
        case ADD_DATA_ON_LIST:
            return [...state, action.payload];
        
        case UPDATE_DATA_ON_LIST:
            return [...state, action.payload];
        
        case REMOVE_DATA_FROM_LIST:
            return [...state, action.payload];
        
        default:
            return state;
    }
}