import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MuseusComponent } from '../museus/museus.component';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent, MuseusComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})

export class ClienteComponent implements OnInit {
  
  review = {
    email: ''
  };
  reviews: any[] = [];

  user = {
    name: '',
    surname: '',
    email: '',
    dob: '',
    gender: ''
  };
  isLoggedIn: boolean = false;
  constructor(private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit(): void { // Atribuir o nome do museu recebido ao iniciar o componente
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      const loggedIn = localStorage.getItem('isLoggedIn');
      const loggedInName = localStorage.getItem('loggedInName');
      const loggedInEmail = localStorage.getItem('loggedInEmail');
      if (loggedIn && loggedInName && loggedInEmail) {
        this.isLoggedIn = JSON.parse(loggedIn);
        this.user.email = loggedInEmail;

        // verifica se o user está logado e carrega os dados do Firestore
        this.firestoreService.getUser(loggedInEmail).subscribe(users => {
          if (users && users.length > 0) {
            const userData = users[0]; // Obter o primeiro user do array
            // Atribuir os campos do user aos campos do formulário
            this.user.name = userData.name;
            this.user.surname = userData.surname;
            this.user.dob = userData.dob;
            this.user.gender = userData.gender;
            this.review.email = this.user.email;
            this.loadReviews();
          }
        });   
      }
    }
  }
  loadReviews(): void {
    this.firestoreService.getAvaliationsCliente(this.review.email).subscribe(data => {
      this.reviews = data;
    });
  }
}
 