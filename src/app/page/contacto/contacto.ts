import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {

  private fb = inject(FormBuilder);

  contactForm!: FormGroup<{
    nombreCompleto: FormControl<string>;
    email: FormControl<string>;
    telefono: FormControl<string>;
    mensaje: FormControl<string>;
    aceptarTerminos: FormControl<boolean>;
  }>;

  mensajeExito: string = '';

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      nombreCompleto: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      telefono: this.fb.control('', { nonNullable: true, validators: [Validators.pattern(/^(|\d{13})$/)] }),
      mensaje: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(50)] }),
      aceptarTerminos: this.fb.control(false, { nonNullable: true, validators: [Validators.requiredTrue] })
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

    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push(this.contactForm.value);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    } catch (error) {
      console.error('Error al guardar en LocalStorage:', error);
    }

    this.mensajeExito = '¡Gracias por tu mensaje! Te contactaremos pronto.';
    
    this.contactForm.reset();
  }
}