import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { RegistroComponent } from './registro/registro.component';
import { PersonajeService } from './services/personaje.service';
import { ZonaCompartidaService } from './services/zonaCompartida.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    PersonajeService,
    ZonaCompartidaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
