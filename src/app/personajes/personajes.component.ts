import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';
import { UriProvider } from '../services/uri.provider';
import { UriControl } from '../domain/generic.domain';
import { PersonajeService } from '../services/personaje.service';
import { ZonaCompartidaService } from '../services/zonaCompartida.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [UriProvider, ClientService]
})

export class PersonajesComponent implements OnInit {

  private personajes: any;
  private sub: any;
  private mensajeError: string;

  constructor(
    private route: ActivatedRoute,
    private uriProvider: UriProvider,
    private genericClientService: ClientService,
    private personajeService: PersonajeService,
    private zonaCompartida: ZonaCompartidaService
  ) { }

  ngOnInit() {
    this.mensajeError = null;
    this.CreateRequestPersonajes();
  }

  CreateRequestPersonajes() {
    let parametros: [string, string][] = new Array<[string, string]>();
    parametros.push(['ts', '1']);
    parametros.push(['apikey', '1447175efad669d1a67b1a763ef1f5e5']);
    parametros.push(['hash', '872da752b384b8d46c486aaa9d479ed1']);
    this.GetPersonajes(parametros);
}

  GetPersonajes(queryParamList: [string, string][]) {
    let serviceProvider: string = 'GetPersonajes';
    let queryParams: Array<[string, string]> = new Array<[string, string]>();
    if (queryParamList !== null) {
        for (let queryParam of queryParamList) {
            queryParams.push([queryParam[0], this.uriProvider.encodeURI(queryParam[1])]);
        }
    }
    let uriService = this.uriProvider.getUri(new UriControl(serviceProvider, null, queryParams));
    this.sub = this.route
        .params
        .subscribe(params => {
            this.genericClientService.get(uriService)
                .subscribe(result => {
                    this.HandleGet(result.data.results);
                },
                err => this.CathException()
                );
        });
  }

  GuardarOpcion(opcion: string, personaje: string) {
    console.log(opcion);
    console.log(personaje);
    let nombre: string = <string>this.zonaCompartida.transferMap['username'];
    let email: string = <string>this.zonaCompartida.transferMap['email'];
    this.personajeService.addPersonaje(nombre, email, personaje, opcion);
  }

  HandleGet(result: any[]) {
    this.personajes = result.filter(r => r.description !== '' && r.urls.length > 2).slice(0, 3);
  }

  CathException() {
    this.mensajeError = 'Error al consultar los comics';
  }

}
