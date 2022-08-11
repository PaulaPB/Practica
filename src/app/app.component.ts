import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: number;
  resultado1: number;
  resultado2: number;
  constructor(){

  }
  ngOnInit() { 
    //this.suma() 
  }
  suma(){
    this.resultado = this.resultado1 + this.resultado2;
  }
  resta(){
    this.resultado = this.resultado1 - this.resultado2;
  }
  multiplicacion(){
    this.resultado = this.resultado1 * this.resultado2;
  }
  /*imprimir(){
    console.log(this.prueba1);
    
  }*/
}
