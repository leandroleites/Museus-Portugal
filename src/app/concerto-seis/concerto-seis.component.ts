import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-concerto-seis',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './concerto-seis.component.html',
  styleUrl: './concerto-seis.component.scss'
})
export class ConcertoSeisComponent {

}
