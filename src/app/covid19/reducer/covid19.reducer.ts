import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { initialState } from './covid19.state';
import { getCovid19, getCovid19Success } from './covid19.actions';

const _covid19Reducer = createReducer(initialState, 
    on(getCovid19, (state) => Object.assign({}, state, {loading: true})),
    on(getCovid19Success,  (state, action) => Object.assign({}, state, {loading: false, data: action.data}))
);

export function covid19Reducer(state, action) {
    return _covid19Reducer(state, action);
}

export const getCovid19Feature = createFeatureSelector<any>('covid');

export const getCovid19Data = createSelector(
    getCovid19Feature,
    (state: any) => state.data
);
