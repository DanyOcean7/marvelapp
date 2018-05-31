import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class ClientService {

    constructor(
        private http: Http,
        private router: Router
    ) {}

  get(uriService: string): Observable<any> {
      let headers = new Headers();
      let options = new RequestOptions({ headers: headers });
      return this.http.get(uriService, options)
          .map(this.extractData)
          .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  handleError(error: any) {
      console.log(error);
      let errMsg = 'Error de conexi&oacute;n con el servidor por favor intente m&aacute;s tarde';
      return Observable.throw(errMsg.replace('"', ''));
  }

}
