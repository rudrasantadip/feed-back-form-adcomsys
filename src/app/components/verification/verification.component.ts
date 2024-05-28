import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {


  constructor(private router:Router){

  }

  verify(){
    this.router.navigate(['form']);
  }
}
