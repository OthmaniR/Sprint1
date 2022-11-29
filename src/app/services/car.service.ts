import { Brand } from './../model/Brand.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

  

export class CarService {

apiURL: string = 'http://localhost:8080/cars/api';
apiUrlBrand : string ='';




  cars : Car[];
  brand! : Brand[];
  carResearch! : Car[];
  carResearch2! : Car[];
  
  car! : Car; 
  constructor(private http : HttpClient,private router:Router) {
    this.brand=[ {idBrand : 1, nomBrand : "Sport"},
    {idBrand : 2, nomBrand : "Sedan"}]; 
    this.cars = [
      { idvoiture : 1, nomvoiture : "Audi ", prixvoiture : 300.600, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 1, nomBrand : "sedan"} },
      { idvoiture : 2, nomvoiture : "porshe ", prixvoiture : 1500.000, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 1, nomBrand : "Sport"} },
      { idvoiture : 3, nomvoiture : "BMW ", prixvoiture : 150.000, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 2, nomBrand : "sedan"} },
      { idvoiture : 4, nomvoiture : "mercedes ", prixvoiture : 200.000, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 1, nomBrand : "sedan"} },
    ];
      }
      listecars():Car[] {return this.cars;
      }

      ajoutercar( c: Car){
        this.cars.push(c);
        this.router.navigate(['/cars'])
      }
     

//       updateCar(c : car){
// // console.log(p);
// this.supprimervoiture(c);
// this.ajoutercar(c);
// }


  supprimervoiture(c: Car) {

    const index = this.cars.indexOf(c, 0);
if (index > -1) {
this.cars.splice(index, 1);


  }
  }
  consultervoiture(id : Number): Car {
    
    this.car = this.cars.find(d => d.idvoiture == id)!;
    return this.car;

    
  }
  updateCar(c :Car) 
    {
           this.ajoutercar(c);
           this.supprimervoiture(c);
           this.triercar();
           
       }
       triercar(){
        this.cars = this.cars.sort((n1,n2) => {
        if (n1.idvoiture! > n2.idvoiture!) {
        return 1;
        }
        if (n1.idvoiture! < n2.idvoiture!) {
        return -1;
        }
        return 0;
        });
        }
 
  listecar(): Car[]{
    return this.cars;
    }

    // updatecar(prod :car) : Observable<car>
    // {
    //         return this.http.put<car>(this.apiURL,prod, httpOptions);
    //    }
    listeBrand():Brand[] {
      return this.brand;
      }
      
      consulterBrand(id:Number): Brand{
        return this.brand.find(bra => bra.idBrand == id)!;
        }
    
        SearchWithName(nomBrand: number):Car[] {
          
          this. carResearch = [];

          this.cars.forEach((cur,index) =>{
            if (nomBrand == cur.brand?.nomBrand){
              console.log("cur "+cur);
              this.carResearch.push(cur);
            }
          });
          return this.carResearch;




          }

}
   




