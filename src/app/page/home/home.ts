import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Submission {
  nombreCompleto: string;
  email: string;
  telefono?: string;
  mensaje: string;
  aceptarTerminos: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  submissions: Submission[] = [];

  ngOnInit(): void {
    this.loadSubmissions();
  }

  loadSubmissions(): void {
    try {
      const storedData = localStorage.getItem('contactSubmissions') || '[]';
      this.submissions = JSON.parse(storedData);
      
      this.submissions.reverse(); 

    } catch (error) {
      console.error('Error cargando envíos desde LocalStorage:', error);
      this.submissions = [];
    }
  }
}