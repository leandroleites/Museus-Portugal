import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MuseusComponent } from './museus/museus.component';
import { PacoDuquesComponent } from './paco-duques/paco-duques.component';
import { MafraComponent } from './mafra/mafra.component';
import { BiscainhosComponent } from './biscainhos/biscainhos.component';
import { DiogoSousaComponent } from './diogo-sousa/diogo-sousa.component';
import { ConcertoSeisComponent } from './concerto-seis/concerto-seis.component';
import { CarrilhaoComponent } from './carrilhao/carrilhao.component';
import { PlataoComponent } from './platao/platao.component';
import { CamilaComponent } from './camila/camila.component';
import { ObrasComponent } from './obras/obras.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'museus', component: MuseusComponent },
  { path: 'paco_duques', component: PacoDuquesComponent },
  { path: 'mafra', component: MafraComponent },
  { path: 'biscainhos', component: BiscainhosComponent },
  { path: 'diogo_sousa', component: DiogoSousaComponent },
  { path: 'concerto_seis', component: ConcertoSeisComponent },
  { path: 'carrilhao', component: CarrilhaoComponent },
  { path: 'platao', component: PlataoComponent },
  { path: 'camila', component: CamilaComponent },
  { path: 'obras', component: ObrasComponent },
  { path: 'cliente', component: ClienteComponent },  
];

