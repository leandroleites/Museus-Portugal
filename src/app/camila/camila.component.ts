import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-camila',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './camila.component.html',
  styleUrl: './camila.component.scss'
})
export class CamilaComponent {

}
