import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {

  private fb = inject(FormBuilder); // Inyección de FormBuilder

  contactForm!: FormGroup;
  mensajeExito: string = '';

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      mensaje: ['', [Validators.required, Validators.minLength(50)]],
      aceptarTerminos: [false, [Validators.requiredTrue]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void { 
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.mensajeExito = ''; 
      return;
    }

    console.log('Formulario Enviado:', this.contactForm.value);
    this.mensajeExito = '¡Gracias por tu mensaje! Te contactaremos pronto.';
    
    this.contactForm.reset();
  }
}