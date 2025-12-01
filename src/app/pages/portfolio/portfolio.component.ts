
import { ReusablebuttonComponent } from "../../shared/components/reusablebutton/reusablebutton.component";
import {  NgStyle } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Social {
  icon: string; 
  url: string;  
  color?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [ NgStyle, ReusablebuttonComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    }
  }

  socials: Social[] = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/?locale=ar_AR', color: '#00eeff' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/esraa-samy-elmeshad-389528249/', color: '#0A66C2' },
    { icon: 'fa-github', url: 'https://github.com/Esraasamyzakria' },
    { icon: 'fa-whatsapp', url: 'https://wa.me/201099097432', color: '#25D366' }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
