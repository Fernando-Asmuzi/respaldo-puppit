import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotasService } from 'src/app/services/mascotas.service';


@Component({
  selector: 'app-mascota-nuevo',
  templateUrl: './mascota-nuevo.component.html',
  styleUrls: ['./mascota-nuevo.component.css']
})
export class MascotaNuevoComponent implements OnInit {

  nombre = '';
  nacimiento = '';
  edad = '';
  raza = '';
  tamanio = '';
  sexo = '';
  peso = '';
  color = '';
  imagen = '';
  descripcion = '';

  mascotaForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder, private mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.mascotaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      tamanio: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      color: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })   
  }

  enviar(){
    let mascota = {
      nombre: this.nombre,
      nacimiento: this.nacimiento,
      edad: this.edad,
      raza: this.raza,
      tamanio: this.tamanio,
      sexo: this.sexo,
      peso: this.peso,
      color: this.color,
      imagen: this.imagen,
      descripcion: this.descripcion,
    }
    
    this.mascotasService.postMascotas(mascota)
    console.log(mascota);
  }
}
