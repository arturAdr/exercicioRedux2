import { createAction } from '@ngrx/store';

export const getCovid19 = createAction('[Covid19] getCovid19');
export const getCovid19Success = createAction('[Covid19] getCovid19Success', (data) => ({data}));
