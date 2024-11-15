import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-paco-duques',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ReviewComponent, RouterModule],
  templateUrl: './paco-duques.component.html',
  styleUrls: ['./paco-duques.component.scss']
})
export class PacoDuquesComponent {
  
}