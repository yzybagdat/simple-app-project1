import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {LoggingService} from './logging.service';


@Injectable()
export class DataService {

  constructor(private http: HttpClient, private logServ: LoggingService) { }

  getProducts() {
    this.logServ.log('List of product')

    return  this.http.get(`${environment.fbDbUrl}/products.json`).pipe(map(res => {
      return Object.keys(res).map(key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date)
      }))
    }))

  }

}
