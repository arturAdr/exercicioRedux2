import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getCovid19, getCovid19Success } from './covid19.actions';

import { mergeMap, map } from 'rxjs/operators';
import { Covid19Service } from '../covid19.service';


@Injectable()
export class Covid19Effect {

    getCovid19Effect$ = createEffect(() => this.actions$.pipe(
        ofType(getCovid19),
        mergeMap(action => this.covid19Service.getCovid19()
        .pipe(map(res => getCovid19Success(res))))));

    constructor(private actions$: Actions, 
        private covid19Service: Covid19Service) {
    }

}
