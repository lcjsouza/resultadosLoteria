import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LotofacilComponent } from './resultados/lotofacil/lotofacil.component';
import { LotomaniaComponent } from './resultados/lotomania/lotomania.component';
import { QuinaComponent } from './resultados/quina/quina.component';
import { MegasenaComponent } from './resultados/megasena/megasena.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultadosComponent,
    HeaderComponent,
    FooterComponent,
    LotofacilComponent,
    LotomaniaComponent,
    QuinaComponent,
    MegasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
