import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-services',
  imports: [NgClass],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
 
   ngAfterViewInit(): void {
     if (isPlatformBrowser(this.platformId)) {
       AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
     }
   }
services = [
  {
    icon: 'fa-code',
    title: 'Web Application Development',
    desc: 'Building dynamic, scalable web applications with Angular using clean and maintainable code.',
    hov: 'zoom-in'
  },
  {
    icon: 'fa-laptop-code',
    title: 'Responsive UI/UX Implementation',
    desc: 'Transforming Figma or Adobe XD designs into pixel-perfect, fully responsive interfaces.',
    hov: 'zoom-in'
  },
  {
    icon: 'fa-file-code',
    title: 'API Integration & Real-Time Data Handling',
    desc: 'Seamless REST API integration and efficient real-time data management with RxJS.',
    hov: 'zoom-in'
  },
  {
    icon: 'fa-user-shield',
    title: 'Authentication & Authorization',
    desc: 'Implementing secure login flows, JWT authentication, and role-based access control.',
    hov: 'zoom-in'
  },
  {
    icon: 'fa-tachometer-alt',
    title: 'Performance Optimization',
    desc: 'Optimizing Angular apps for speed and responsiveness using best practices and lazy loading.',
    hov: 'zoom-in'
  },
  {
    icon: 'fa-cubes',
    title: 'Component-Based Architecture',
    desc: 'Creating modular, reusable components for better maintainability and scalability.',
    hov: 'zoom-in'
  }
];

}
