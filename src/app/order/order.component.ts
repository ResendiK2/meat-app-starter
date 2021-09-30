import { Component, OnInit } from '@angular/core';
import { RadioOptions } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOptions[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Crédito', value: 'CDT' },
    { label: 'Boleto', value: 'BOL' },
    { label: 'Pix', value: 'PIX' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
