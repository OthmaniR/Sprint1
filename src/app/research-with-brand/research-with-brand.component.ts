import { Brand } from './../model/Brand.model';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-research-with-brand',
  templateUrl: './research-with-brand.component.html',
  styleUrls: ['./research-with-brand.component.css']
})
export class ResearchWithBrandComponent implements OnInit {
car! : Car[];
brand! : Brand;
idBrand! : Number;
  constructor() { }

  ngOnInit(): void {
  }

}
