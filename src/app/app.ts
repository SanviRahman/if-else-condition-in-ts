import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  score:number=85;
  grade:string='';


  isCheck(){
    if(this.score>80){
      this.grade='A+';
    }
    else if(this.score>60){
      this.grade='A';
    }
    else if(this.score>40){
      this.grade='A+';
    }
    else{
      this.grade='Fail';
    }
  }

}
