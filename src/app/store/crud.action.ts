import { Action } from '@ngrx/store';

export const GET_ALL_DATA_FROM_LIST = 'Get list of data';
export const ADD_DATA_ON_LIST = 'Add New List';
export const UPDATE_DATA_ON_LIST = 'Update List';
export const REMOVE_DATA_FROM_LIST = 'Remove Dara';

export class GetListOfData implements Action {
    readonly type = GET_ALL_DATA_FROM_LIST;
}

export class AddNewDataOnList implements Action {
    readonly type = ADD_DATA_ON_LIST;
    constructor(public payload: any) {}
}

export class UpdateDataOnList implements Action {
    readonly type = UPDATE_DATA_ON_LIST;
    constructor(public payload: any) {}
}

export class RemoveIndividualData implements Action {
    readonly type = REMOVE_DATA_FROM_LIST;
    constructor(public payload: any) {}
}

export type crudActions = GetListOfData | AddNewDataOnList | UpdateDataOnList | RemoveIndividualData;