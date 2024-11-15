import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-platao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './platao.component.html',
  styleUrl: './platao.component.scss'
})
export class PlataoComponent {

}
