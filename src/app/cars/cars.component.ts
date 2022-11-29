import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars : Car[]; //un tableau de chînes de caractères
  constructor(private CarService : CarService,private router : Router,
    public authService: AuthService,)  {  
    this.cars = CarService.listecars();
   }

  ngOnInit(): void {



  }

  supprimervoiture( ca: Car){

const index = this.cars.indexOf(ca, 0);
if (index > -1) {
this.cars.splice(index, 1);
}
let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.CarService.supprimervoiture(ca);


// let conf = confirm("Etes-vous sûr ?");
//     if (conf)
//     this.CarService.supprimerProduit(ca);
//     }

  }
}
