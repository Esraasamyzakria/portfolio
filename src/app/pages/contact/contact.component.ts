import { Component, Inject, PLATFORM_ID } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { isPlatformBrowser, NgStyle } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Social {
  icon: string; 
  url: string;  
  color?: string;
}

@Component({
  selector: 'app-contact',
  imports: [NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
   public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_tqf6ja9', 'template_a78lz14', e.target as HTMLFormElement, {
        publicKey: 'inBAd-A5l2fzVaQFe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

contacts:any[]=[
 { icon: 'fa-solid fa-envelope-circle-check',email:'esamy3955@gmail.com'},
 { icon: 'fa-solid fa-square-phone',phone:'01099097432'},
  { icon: 'fa-solid fa-location-dot',location:'Cairo, Egypt' },

]
  
}
