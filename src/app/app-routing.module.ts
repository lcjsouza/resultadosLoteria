import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LotofacilComponent } from './resultados/lotofacil/lotofacil.component';
import { LotomaniaComponent } from './resultados/lotomania/lotomania.component';
import { MegasenaComponent } from './resultados/megasena/megasena.component';
import { QuinaComponent } from './resultados/quina/quina.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'lotofacil', component: LotofacilComponent},
  {path: 'lotomania', component: LotomaniaComponent},
  {path: 'megasena', component: MegasenaComponent},
  {path: 'quina', component: QuinaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
