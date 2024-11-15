import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-museus',
  standalone: true,
  templateUrl: './museus.component.html',
  styleUrl: './museus.component.scss',
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent] // Certifique-se de importar o RouterModule
})
export class MuseusComponent {

}
