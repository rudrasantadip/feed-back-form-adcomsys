import { Component } from '@angular/core';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent {

  //function to generate rating
  numberRating(rate:number) : number[]{
    return Array.from({length:rate}, (v,k)=>k+1)
  }

}
