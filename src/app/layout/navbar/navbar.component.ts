import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import {  NgClass } from '@angular/common';
import { AboutComponent } from "../../pages/about/about.component";


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgClass,AboutComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isDarkMode = false;
   showAboutModal = false;

  openAboutModal() {
    this.showAboutModal = true;
  }

  closeAboutModal() {
    this.showAboutModal = false;
  }

  ngOnInit() {

    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      // أول تشغيل
      this.applyTheme(prefersDark.matches);

      // تحديث عند تغيير النظام
      prefersDark.addEventListener('change', (e) => {
        this.applyTheme(e.matches);
      });
    }
  }

  applyTheme(isDark: boolean) {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
      } else {
        document.documentElement.classList.remove('dark');
        this.isDarkMode = false;
      }
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }


  sections = [
  { name: 'Home', icon: 'fa-regular fa-house pe-5' },
  { name: 'About', icon: 'fa-regular fa-user pe-5' },
  { name: 'Services', icon: 'fa-solid fa-circle-nodes pe-5' },
  { name: 'Skils', icon: 'fa-regular fa-lightbulb pe-5' },
  { name: 'Projects', icon: 'fa-solid fa-code pe-5' },
  { name: 'Contact', icon: 'fa-regular fa-envelope pe-5' },
];

activeSection: string = 'Home';

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPos = window.scrollY + 150; // تخفيف الحساسية
  for (let section of this.sections) {
    const el = document.getElementById(section.name);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        this.activeSection = section.name;
      }
    }
  }
}

 scrollTo(sectionName: string) {
    if (sectionName !== 'About') {
      const el = document.getElementById(sectionName);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.openAboutModal();
    }
  }

isActive(sectionName: string) {
  return this.activeSection === sectionName;
}
}