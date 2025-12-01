import { Component } from '@angular/core';

@Component({
  selector: 'app-reusablebutton',
  imports: [],
  templateUrl: './reusablebutton.component.html',
  styleUrl: './reusablebutton.component.scss'
})
export class ReusablebuttonComponent {
downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/Esraa Samy Elmeshad(CV).pdf';
  link.download = 'Esraa_Samy_CV.pdf';
  link.click();
}

}
