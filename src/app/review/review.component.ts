import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() museum!: string; // Usar operador de afirmação não nulo

  review = {
    name: '',
    email: '',
    value: 0,
    comment: '',
    museum: '' // Definido o nome do museu
  };
  reviews: any[] = [];
  isLoggedIn: boolean = false;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.review.museum = this.museum; // Atribuir o nome do museu recebido ao iniciar o componente
    this.loadReviews();
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      const loggedIn = localStorage.getItem('isLoggedIn');
      const loggedInName = localStorage.getItem('loggedInName');
      const loggedInEmail = localStorage.getItem('loggedInEmail');
      if (loggedIn && loggedInName && loggedInEmail) {
        this.isLoggedIn = JSON.parse(loggedIn);
        this.review.name = loggedInName;
        this.review.email = loggedInEmail;
      }
    }
  }

  submitReview(event: Event): void {
    event.preventDefault();
    if (!this.isLoggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Por favor inicie sessão antes de efetuar um comentário!',
        confirmButtonColor: '#61380B'
      });
      return;
    }

    this.firestoreService.addAvaliation(this.review).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Avaliação enviada com sucesso!',
        confirmButtonColor: '#61380B'
      });
      this.review = { name: this.review.name, email: this.review.email, value: 0, comment: '', museum: this.museum }; // Atualiza o formulário
      this.loadReviews(); // Recarrega as avaliações após enviar uma nova
    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro ao enviar avaliação: ' + error,
        confirmButtonColor: '#61380B'
      });
    });
  }

  loadReviews(): void {
    this.firestoreService.getAvaliations(this.museum).subscribe(data => {
      this.reviews = data;
    });
  }
}
