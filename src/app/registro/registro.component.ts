import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ZonaCompartidaService } from '../services/zonaCompartida.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zonaCompartida: ZonaCompartidaService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model.username);
    console.log(this.model.email);
    this.zonaCompartida.transferMap['username'] = this.model.username;
    this.zonaCompartida.transferMap['email'] = this.model.email;
    this.router.navigate(['./personajes']);
  }

}
