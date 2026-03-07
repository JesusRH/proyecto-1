import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-unidades',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-unidades.component.html',
  styleUrls: ['./registro-unidades.component.css']
})
export default class RegistroUnidadesComponent {
  unidadForm: FormGroup;
  folioActual = 101; // Ejemplo de folio
  posting = false;

  constructor(private fb: FormBuilder) {
    this.unidadForm = this.fb.group({
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      placaTracto: ['', Validators.required],
      operador: ['', Validators.required],
      telefono: ['', Validators.required],
      // Si luego quieres agregar góndolas y cantidad:
      placaGondola1: [''],
      placaGondola2: [''],
      cantidadM3: [0]
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