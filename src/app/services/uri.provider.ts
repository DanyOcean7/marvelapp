import { Injectable } from '@angular/core';
import { UriControl } from '../domain/generic.domain';

@Injectable()
export class UriProvider {

  private host = 'https://gateway.marvel.com:443/';

  getUri(control: UriControl): string {
    let provider = this.getProvider(control.serviceProvider);
    let uri = this.host + provider;
    if (control.pathParameters != null) {
      let path = this.getPathParams(control.pathParameters);
      uri = uri + path;
    }
    if (control.queryParameters != null) {
      let query = this.getQueryParams(control.queryParameters);
      uri = uri + query;
    }
    return uri;
  }

  private getProvider (serviceProvider: string): string {
      switch (serviceProvider) {
          case 'GetPersonajes':
              return 'v1/public/characters';
          default:
              return '';
      }
  }

  private getPathParams (pathParams : [number, string][]): string {
    var paramResponse = '';
    for (let param of pathParams) {
      paramResponse = paramResponse + param[1] + '&';
    }
    let urilenght = paramResponse.length;
    return '/' + paramResponse.substring(0, (urilenght - 1));
  }

  private getQueryParams (queryParams : [string, string][]): string {
    var paramResponse = '';
    for (let param of queryParams) {
      paramResponse = paramResponse + param[0] + '=' + param[1] + '&';
    }
    let urilenght = paramResponse.length;
    return '?' + paramResponse.substring(0, (urilenght - 1));
  }

  public encodeURI (uri: string): string {
    return encodeURIComponent(uri);
  }
  public decodeURI (uri: string): string {
    return decodeURIComponent(uri);
  }
}
