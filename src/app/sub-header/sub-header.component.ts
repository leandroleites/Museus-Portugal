import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
  imports: [RouterModule, RouterLink,RouterOutlet] 
})
export class SubHeaderComponent {

}
