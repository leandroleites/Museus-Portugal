import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { UserService } from '../user.service'; // Ajuste o caminho conforme necessário
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SubHeaderComponent]
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  gender: string = '';
  dob: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmitRegister() {
    console.log('Form submitted'); // Adicione este log para verificar se a função está sendo chamada

    // Verifique se todos os campos estão preenchidos
    if (!this.name || !this.surname || !this.gender || !this.dob || !this.email || !this.password || !this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Todos os campos são obrigatórios.',
        confirmButtonColor: '#61380B',
      });
      return;
    }

    // Verifique se a senha e a confirmação da senha são iguais
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Passwords não coincidem.',
        confirmButtonColor: '#61380B',
      });
      return;
    }

    const user = {
      name: this.name,
      surname: this.surname,
      dob: this.dob,
      email: this.email,
      password: this.password,
      gender: this.gender
    };

    this.userService.addUser(user).then(() => {
      console.log('User added successfully!');
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Conta criada com sucesso!',
      }).then(() => {
        this.router.navigate(['/home']); // Redireciona para a página inicial após o registro
      });
    }).catch(error => {
      console.error('Error adding user: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Ocorreu um erro ao criar a conta. Por favor, tente novamente.',
        confirmButtonColor: '#61380B',
      });
    });
  }
}
