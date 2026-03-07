import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-unidades',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-unidades.component.html',
  styleUrls: ['./registro-unidades.component.css'] // 👈 ojo: debe ser styleUrls (plural)
})
export  default class RegistroUnidadesComponent {
  unidadForm: FormGroup;
  folioActual = 101; // Ejemplo de folio
  posting = false;

  constructor(private fb: FormBuilder) {
    this.unidadForm = this.fb.group({
      // Datos del Tracto
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      placaTracto: ['', Validators.required],

      // Góndolas
      placaGondola1: [''],
      placaGondola2: [''],

      // Producto
      mina: [''],
      producto: [''],

      // Operador
      operador: ['', Validators.required],
      telefono: ['', Validators.required],

      // Carga
      cantidadM3: [0, Validators.required],
      observaciones: ['']
    });
  }

  isPosting() {
    return this.posting;
  }

  guardarUnidad() {
    if (this.unidadForm.valid) {
      this.posting = true;
      console.log('Datos registrados:', this.unidadForm.value);
      // Aquí puedes enviar los datos a tu backend con HttpClient
      setTimeout(() => this.posting = false, 2000); // Simulación de espera
    }
  }
}