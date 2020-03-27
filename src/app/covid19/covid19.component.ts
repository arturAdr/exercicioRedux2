import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Covid19State } from './reducer/covid19.state';
import { getCovid19 } from './reducer/covid19.actions';

import * as Highcharts from 'highcharts';
import { getCovid19Data } from './reducer/covid19.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  constructor(private store: Store<Covid19State>) { }

  ngOnInit() {
    this.store.dispatch(getCovid19());
    this.createChart();
  }

  createChart() {

    this.store.select(getCovid19Data)
      .pipe(map(data => Object.keys(data)
        .map(key => ({
          name: key, data: data[key].map(value => {
            let date = value.date.split('-');
            return [Date.UTC(date[0], date[1], date[2]), value.confirmed ];
          })
        }))))
      .subscribe((data: any) => {
        if (data) {

          Highcharts.chart('container', {
            title: {
              text: 'Covid 19'
            },
            subtitle: {
              text: ''
            },
            yAxis: {
              title: {
                text: 'Número de pessoas confirmadas com Covid19'
              }
            },
            xAxis: {
              type: 'datetime',
              labels: {
                  format: '{value:%Y-%m-%d}',
                  align: 'left'
              }
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
            },
            series: data.slice(0, 10),
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                  }
                }
              }]
            }
          });
        }
      });
  }

}
