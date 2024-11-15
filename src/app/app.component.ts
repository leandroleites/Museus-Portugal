import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { MuseusComponent } from './museus/museus.component';
import { PacoDuquesComponent } from './paco-duques/paco-duques.component';
import { DiogoSousaComponent } from './diogo-sousa/diogo-sousa.component';
import { BiscainhosComponent } from './biscainhos/biscainhos.component';
import { MafraComponent } from './mafra/mafra.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RegisterComponent, HeaderComponent, FooterComponent, SubHeaderComponent,
    MuseusComponent, PacoDuquesComponent, DiogoSousaComponent, BiscainhosComponent, MafraComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MuseusPT';
}

