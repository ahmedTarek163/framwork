import { Component,  } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  lab: string='';  
  lab1:string=''
  lab2:string='';
  lab3:string='';
  
  add() {
    return this.lab === '';}
    add1() {
      return this.lab1 === '';}
      add2() {
        return this.lab2 === '';}
        add3() {
          return this.lab3 === '';}
        

}
