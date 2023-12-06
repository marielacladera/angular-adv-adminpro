import { Component } from '@angular/core';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './notpagefound.component.html',
  styleUrl: `./notpagefound.component.css`
})
export class NotpagefoundComponent {
  
  private year: number;

  constructor( 
      
  ) {
    this.year = new Date().getFullYear(); 
  }

  public getYear() {
    return this.year;
  }
}
