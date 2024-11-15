import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface Obra {
  museum: string;
  title: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.scss'
})

export class ObrasComponent {
  obras: Obra[] = [
    { title: '“S. Jerónimo”', author: 'Belchior da Fonseca', date: '(1583)', category: 'pintura', museum: 'pdd', imageUrl: 'assets/obra1_pdd.jpg' },
    { title: '“Virgem da Piedade”', author: 'Hendrik Van Balen', date: '(séc. XVI-XVII)', category: 'esc', museum: 'pdd',  imageUrl: 'assets/art_pdd.png' },
    { title: 'Taça “Ming”', author: 'Dirck van Baburen', date: '(1522-66)', category: 'cer', museum: 'pdd',  imageUrl: 'assets/cer1_bisc.jpg' },
    { title: '“A Explicação do Sonho”', author: 'Peter Paul Rubens', date: '1618-1643', category: 'tex', museum: 'pdd',  imageUrl: 'assets/text1.jpg' },

    { title: '“Virgem em Oração”', author: 'Autor Desconhecido', date: '(séc. XVI)', category: 'pintura', museum: 'dds',  imageUrl: 'assets/obra3_pdd.jpg' },
    { title: '“Cristo Crucificado”', author: 'Bento Coelho da Silveira', date: '(séc. XVII)', category: 'esc', museum: 'mafra',  imageUrl: 'assets/art_pdd2.png' },
    { title: 'Vaso Talavera de la Reina', author: 'Cavalier Curvali', date: '(séc. XVI)', category: 'cer', museum: 'mafra',  imageUrl: 'assets/cer2_bisc.jpg' },
    { title: '“Cipião libertando uma Princesa”', author: 'Jan Raes II ', date: '1618-1643', category: 'tex', museum: 'mafra',  imageUrl: 'assets/text2.jpg' },

    { title: '“Cordeiro Místico”', author: 'Josefa de Óbidos (?)', date: '(1660-70)', category: 'pintura', museum: 'bisc',  imageUrl: 'assets/obra4_pdd.jpg' },
    { title: '“Sagrada Família Caminhante”', author: 'Giovanni Guercino', date: '(séc. XVIII-XIX?)', category: 'esc', museum: 'dds',  imageUrl: 'assets/art_pdd3.png' },
    { title: 'Prato de “Aranhões”', author: 'Francisco Vieira de Matos', date: '(1650-80)', category: 'cer', museum: 'dds',  imageUrl: 'assets/cer3_bisc.jpg' },
    { title: 'Bandeira Esquartelada', author: 'António Félix', date: '(séc. XIX)', category: 'tex', museum: 'dds',  imageUrl: 'assets/text4.jpg' },

    { title: '“S. Gregório Magno”', author: 'Belchior da Fonseca', date: '(1583)', category: 'pintura', museum: 'mafra', imageUrl: 'assets/obra2_pdd.jpg' },
    { title: '“Busto”', author: 'Giuseppe Recco', date: '(séc. XVIII-XIX?)', category: 'esc', museum: 'bisc',  imageUrl: 'assets/art_pdd4.png' },
    { title: '“Pote”', author: 'Autor Desconhecido', date: '(séc. XVII)', category: 'cer', museum: 'bisc',  imageUrl: 'assets/cer4_bisc.jpg' },
    { title: '“Consagração à Morte”', author: 'Van den Dries', date: '1636-1671', category: 'tex', museum: 'dds',  imageUrl: 'assets/text3.jpg' },

    { title: '“Martim Velho Barreto”', author: 'Júlio Ramos', date: '(séc. XVII)', category: 'pintura', museum: 'bisc',  imageUrl: 'assets/obra5_pdd.jpg' },
    { title: '“Santa Catarina de Alexandria”', author: 'João Baptista ', date: '(séc. XV)', category: 'esc', museum: 'pdd',  imageUrl: 'assets/mafra8.jpg' },
    { title: '“Aquário”', author: 'Bordalo Pinheiro', date: '1636-1671', category: 'cer', museum: 'mafra',  imageUrl: 'assets/cer5_bisc.jpg' },
    { title: '“Amor Maternal”', author: 'Vilanova Porto', date: '(séc. XVIII)', category: 'pintura', museum: 'bisc',  imageUrl: 'assets/obra6_pdd.jpg' },
    { title: '“Padrão das Teigas”', author: 'José Nunes', date: '(séc. XIII?)', category: 'esc', museum: 'pdd',  imageUrl: 'assets/mafra9.jpg' },
  ];

   // Arrays para armazenar os nomes e argumentos dos museus e categorias
   museus: { nome: string; argumento: string }[] = [
    { nome: 'Paço dos Duques', argumento: 'pdd' },
    { nome: 'Palácio Mafra', argumento: 'mafra' },
    { nome: 'Museu Biscainhos', argumento: 'bisc' },
    { nome: 'D. Diogo de Sousa', argumento: 'dds' }
  ];

  categorias: { nome: string; argumento: string }[] = [
    { nome: 'Pintura', argumento: 'pintura' },
    { nome: 'Escultura', argumento: 'esc' },
    { nome: 'Cerâmica', argumento: 'cer' },
    { nome: 'Têxteis', argumento: 'tex' }
  ];

  // Variáveis para armazenar o museu e a categoria selecionados
  selectedMuseu: string = 'todos';
  selectedCategoria: string = 'todos';

  constructor() {}

  // Método para filtrar as obras com base no museu e na categoria selecionados

  filtrarObras() {
    return this.obras.filter(obra => {
      const museuMatch = this.selectedMuseu === 'todos' || obra.museum === this.selectedMuseu;
      const categoriaMatch = this.selectedCategoria === 'todos' || obra.category === this.selectedCategoria;
      return museuMatch && categoriaMatch;
    });
  }
}



