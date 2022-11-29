import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Observable } from 'rxjs';
import { Brand } from '../model/Brand.model';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [
  ]
})
export class UpdateCarComponent implements OnInit {
  currentcar = new Car();
  brand! : Brand[];
updateBrandId! : Number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CarService: CarService) { }

  ngOnInit(): void {
  this.brand = this.CarService.listeBrand();
    this.currentcar =
    this.CarService.consultervoiture(this.activatedRoute.snapshot.params['id']);
    this.updateBrandId = this.currentcar.brand.idBrand;
    

//     this.currentcar = this.CarService.consultervoiture(
//       this.activatedRoute.snapshot.params['id']
//       );
// console.log(this.currentcar);
  }


  updatecar()
  {

  // this.CarService.updateCar(this.currentcar);
  // this.router.navigate(['cars', this.currentcar]);
this.currentcar.brand = this.CarService.consulterBrand(this.updateBrandId);
  this.CarService.updateCar(this.currentcar);
    this.router.navigate(['cars']);
    

  }
  
  
}
