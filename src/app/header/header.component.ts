import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import Swal from 'sweetalert2'; 
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink, RouterOutlet] 
})

export class HeaderComponent implements AfterViewInit, OnInit {

  collectionData: any[] = [];
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  loginMessage: string = '';
  isLoggedIn: boolean = false; // Variável para armazenar o estado de login
  loggedInName: string = ''; // Variável para armazenar o nome do user logado
  loggedInEmail: string = ''; // Variável para armazenar o email do user logado

  constructor(private el: ElementRef, private firestoreService: FirestoreService, private router: Router,  public authService: AuthService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      const loggedIn = localStorage.getItem('isLoggedIn');
      const loggedInName = localStorage.getItem('loggedInName');
  
      if (loggedIn && loggedInName) {
        this.isLoggedIn = JSON.parse(loggedIn);
        this.loggedInName = loggedInName;
      }
    }
  }

  ngAfterViewInit(): void {
    this.setupMenuToggle();
    this.setupLoginToggle();
    this.loadFirestoreData();
  }

  setupMenuToggle(): void {
    const navMenu = this.el.nativeElement.querySelector('#nav-menu');
    const navToggle = this.el.nativeElement.querySelector('#nav-toggle');
    const navClose = this.el.nativeElement.querySelector('#nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  }

  setupLoginToggle(): void {
    const login = this.el.nativeElement.querySelector('#login');
    const loginBtn = this.el.nativeElement.querySelector('#login-btn');
    const loginClose = this.el.nativeElement.querySelector('#login-close');

    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        login.classList.add('show-login');
      });
    }

    if (loginClose) {
      loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
      });
    }
  }

  loadFirestoreData(): void {
    this.firestoreService.getCollectionData('user').subscribe(data => {
      this.collectionData = data;
    });
  }

  onLogout() {
    // Limpar estado de login e detalhes do user
    this.isLoggedIn = false;
    this.loggedInName = '';
    // Remover estado de login e detalhes do user do localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInName');
    localStorage.removeItem('loggedInEmail');
    // Redirecionar para a página inicial
    this.router.navigate(['/home']);
    window.location.reload();
  }
  
  onSubmitLogin() {
    console.log('Login form submitted'); // Log para verificar a submissão do formulário
    this.firestoreService.checkUserExists(this.email, this.password).subscribe(users => {
      console.log('User check completed'); // Log para verificar a conclusão da verificação do user
      if (users.length > 0) {
        const user = users[0];
        this.name = user.name;
        this.surname = user.surname;
        console.log('User found, showing success alert'); // Log para verificar se o user foi encontrado
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Login efetuado com sucesso!',
          confirmButtonColor: '#61380B'
        }).then(() => {
          this.isLoggedIn = true; // Definir estado de login como verdadeiro
          this.loggedInName = `${this.name} ${this.surname}`; // Armazenar nome e sobrenome do user logado
          // Armazenar estado de login e detalhes do user no localStorage
          localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
          localStorage.setItem('loggedInName', this.loggedInName);
          localStorage.setItem('loggedInEmail', this.email); // Armazenar email do user logado
  
          // Adicionar um pequeno atraso para garantir que o alerta seja exibido
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Atraso de 1 segundo
        });
      } else {
        console.log('User not found, showing error alert'); // Log para verificar se o user não foi encontrado
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Email ou password inválidos!',
          confirmButtonColor: '#61380B'
        });
      }
    }, error => {
      console.log('Error occurred, showing error alert'); // Log para verificar se ocorreu um erro
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Ocorreu um erro ao verificar as credenciais. Por favor, tente novamente.',
        confirmButtonColor: '#61380B'
      });
    });
  }
}

