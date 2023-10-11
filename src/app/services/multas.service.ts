import { Injectable } from '@angular/core';
import { Multa } from '../class/multa';

@Injectable({
  providedIn: 'root'
})
export class MultasService {
lista_multas : Multa[] = [
  {
  identificador_infraccion: 'A-001',
  dni: 34131648,
  fecha_infraccion: '2023-09-01',
  importe: 50000,
  fecha_pago: '',
  },
  {
  identificador_infraccion: 'A-032',
  dni: 2020200,
  fecha_infraccion: '2020-09-01',
  importe: 35000,
  fecha_pago: '2021-03-11',
  },
  {
  identificador_infraccion: 'A-093',
  dni: 34131648,
  fecha_infraccion: '2020-01-01',
  importe: 17000,
  fecha_pago: '',
  },
  {
  identificador_infraccion: 'A-046',
  dni: 1010100,
  fecha_infraccion: '2022-12-12',
  importe: 75000,
  fecha_pago: '2022-12-13',
  },
  {
  identificador_infraccion: 'A-125',
  dni: 8080800,
  fecha_infraccion: '2015-04-05',
  importe: 22000,
  fecha_pago: '2019-07-11',
  },  
  {
  identificador_infraccion: 'A-436',
  dni: 34131648,
  fecha_infraccion: '2020-06-18',
  importe: 88000,
  fecha_pago: '2022-06-06',
  },
  {
  identificador_infraccion: 'A-078',
  dni: 34131648,
  fecha_infraccion: '2019-08-21',
  importe: 40000,
  fecha_pago: '',
  },
  {
  identificador_infraccion: 'A-806',
  dni: 2020200,
  fecha_infraccion: '2020-02-26',
  importe: 50000,
  fecha_pago: '',
  },
  {
  identificador_infraccion: 'A-219',
  dni: 20230128,
  fecha_infraccion: '2018-09-01',
  importe: 130000,
  fecha_pago: '',
  },
  {
    identificador_infraccion: 'A-210',
    dni: 1010100,
    fecha_infraccion: '2018-09-01',
    importe: 55000,
    fecha_pago: '2021-08-14',
  },
  {
  identificador_infraccion: 'A-921',
  dni: 3030300,
  fecha_infraccion: '2023-03-01',
  importe: 22000,
  fecha_pago: '2023-06-12',
  },
  {
  identificador_infraccion: 'A-063',
  dni: 3030300,
  fecha_infraccion: '2021-09-01',
  importe: 78000,
  fecha_pago: '2023-10-01',
  },
  {
  identificador_infraccion: 'A-551',
  dni: 2020200,
  fecha_infraccion: '2020-09-01',
  importe: 50000,
  fecha_pago: '',
  },
{
identificador_infraccion: 'A-041',
dni: 2020200,
fecha_infraccion: '2017-07-23',
importe: 50000,
fecha_pago: '',
},
{
  identificador_infraccion: 'A-651',
  dni: 15121369,
  fecha_infraccion: '2022-06-17',
  importe: 120000,
  fecha_pago: '2023-08-21',
  },
];

  constructor() { }

getMultas(){
  return this.lista_multas;
}




updateMulta(multa : Multa){
  let indice = this.lista_multas.indexOf(multa);
  this.lista_multas[indice] = multa;
}


}
