import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonajeService {

  result: any;
  constructor(private http: HttpClient) {}

  addPersonaje(nombre, email, personaje, enlace) {
    const uri = 'http://localhost:4000/personajes/add';
    const obj = {
      nombre: nombre,
      email: email,
      personaje: personaje,
      enlace: enlace
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getPersonaje() {
    const uri = 'http://localhost:4000/personajes';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editPersonaje(id) {
    const uri = 'http://localhost:4000/personajes/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updatePersonaje(name, price, id) {
    const uri = 'http://localhost:4000/personajes/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deletePersonaje(id) {
    const uri = 'http://localhost:4000/personajes/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
