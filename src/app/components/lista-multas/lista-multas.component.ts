import { Component, OnInit, Input } from '@angular/core';
import { MultasService } from 'src/app/services/multas.service';
import { Multa } from 'src/app/class/multa';

@Component({
  selector: 'app-lista-multas',
  templateUrl: './lista-multas.component.html',
  styleUrls: ['./lista-multas.component.css']
})
export class ListaMultasComponent implements OnInit {
  
  lista_multas: Multa[] = [];
  multasFiltradas: Multa[] = [];
  filtro: number | null = null;
  errorMessage: string | null = null;
  fechaPago: string = new Date().toISOString().slice(0, 10);

  constructor(private multasService: MultasService) {}

  ngOnInit(): void {
    this.lista_multas = this.multasService.getMultas();
    this.ordenarPorFecha();
    this.aplicarFiltro();
  }

  ponerPagado(multa: Multa) {
    multa.fecha_pago = this.fechaPago
    this.multasService.updateMulta(multa);
  }

  ordenarPorFecha() {
    this.lista_multas.sort((a, b) => {
      const fechaA = new Date(a.fecha_infraccion);
      const fechaB = new Date(b.fecha_infraccion);
      return   fechaB.getTime() - fechaA.getTime();
    });
  }

  aplicarFiltro() {
    if (this.filtro !== 0) {
      this.multasFiltradas = this.lista_multas.filter((multa) => multa.dni === this.filtro);
    
    }
  }


  validarFiltro() {
    if (this.filtro !== null && this.filtro.toString().length > 8) {
      this.errorMessage = 'El número debe tener como máximo 8 dígitos';
      alert(this.errorMessage);
    } else {
      this.errorMessage = null;
    }
  }
  
  

  limpiarFiltro() {
    this.filtro = null;
    this.aplicarFiltro();
  }
}
