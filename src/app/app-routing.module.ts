import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationComponent } from './components/verification/verification.component';
import { FormFeedbackComponent } from './components/form-feedback/form-feedback.component';

const routes: Routes = [
  {path:'',redirectTo:'verify',pathMatch:'full'},
  {path:'verify',component:VerificationComponent},
  {path:'form',component:FormFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
