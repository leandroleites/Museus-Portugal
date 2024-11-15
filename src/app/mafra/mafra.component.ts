import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-mafra',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent, ReviewComponent],
  templateUrl: './mafra.component.html',
  styleUrl: './mafra.component.scss'
})
export class MafraComponent {
}

