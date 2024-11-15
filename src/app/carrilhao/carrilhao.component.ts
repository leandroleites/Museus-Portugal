import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-carrilhao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './carrilhao.component.html',
  styleUrl: './carrilhao.component.scss'
})
export class CarrilhaoComponent {

}
