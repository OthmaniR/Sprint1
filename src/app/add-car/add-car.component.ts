import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Brand } from '../model/Brand.model';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  newcar = new Car();
brand! : Brand[];
newIdBrand! : Number;
newBrand! : Brand;
  constructor(private carServices: CarService,
    private router : Router) { }

  ngOnInit(): void {
    this.brand = this.carServices.listeBrand();

  }
  addcar(){
    console.log(this.newIdBrand);
    this.newBrand = 
    this.carServices.consulterBrand(this.newIdBrand);
    this.newcar.brand = this.newBrand;
    this.carServices.ajoutercar(this.newcar);
   
    this.router.navigate(['cars']);
   

    }

}
