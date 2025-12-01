import { Component, EventEmitter, Output } from '@angular/core';
import { ReusablebuttonComponent } from "../../shared/components/reusablebutton/reusablebutton.component";

@Component({
  selector: 'app-about',
  imports: [ReusablebuttonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  contacts: any[] = [
  { 
    icon: 'fa-solid fa-envelope-circle-check', 
    name: 'Email', 
    value: 'esamy3955@gmail.com', 
    type: 'email' 
  },
  { 
    icon: 'fa-brands fa-linkedin', 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/esraa-samy-elmeshad-389528249/', 
    type: 'link' 
  },
  { 
    icon: 'fa-brands fa-github', 
    name: 'GitHub', 
    url: 'https://github.com/Esraasamyzakria', 
    type: 'link' 
  },
];
skills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Angular' },
  { name: 'SCSS'},
  { name: 'TailwindCSS' },
  { name: 'Bootstrap' },
  { name: 'jQuery' },
  { name: 'GitHub' },
  { name: 'Flowbite' },
  { name: 'PrimeNG' },
  { name: 'NgRx' },
  { name: 'UnitTesting' },
  { name: 'Scrum & Agile' },
  { name: 'Figma' },
 
];
}
