
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-porduct',
  imports: [ ],
  templateUrl: './porduct.component.html',
  styleUrl: './porduct.component.scss'
})
export class PorductComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    }
  }
products = [
  {
    name: "Online Exam Management System",
    desc: "A scalable Angular application built with clean architecture, state management, reusable libraries, and a fully responsive UI.",
    tech: [
      "HTML",
      "SCSS",
      "TypeScript",
      "TailwindCSS",
      "Flowbite",
      "PrimeNG",
      "NgRx",
      "API Integration",
      "Unit Testing",
      "Authentication",
      "Clean Architecture",
      "Angular Library"
    ],
    github: "https://github.com/Esraasamyzakria/FristAppElevates",
    live: "https://frist-app-elevates.vercel.app/login",
    image: "image/pro2.png",  
    aos: "fade-right"
  },
    {
    name: "E-Commerce  Project",
    desc: "A full-featured e-commerce platform built with Angular, integrating APIs for products, users, and payments, with responsive UI and modern design.",
    tech: [
      "HTML",
      "SCSS",
      "TypeScript",
      "TailwindCSS",
      "Flowbite",
      "Angular",
      "API Integration"
    ],
    github: "https://github.com/Esraasamyzakria/e-commerc-finalproject",
    live: "https://e-commerc-finalproject.vercel.app",
        image: "image/pro4.png",  
    aos: "fade-left"
  },
    {
    name: "Note App",
    desc: "A notes management app with user authentication and API-backed CRUD operations, built for simplicity and speed.",
    tech: [
      "HTML",
      "SCSS",
      "TypeScript",
      "TailwindCSS",
      "Flowbite",
      "Angular",
      "API Integration"
    ],
    github: "https://github.com/Esraasamyzakria/note-app",
    live: "https://note-app-chi-eight.vercel.app/#/register",
    image: "image/pro6.png",
    aos: "fade-up"
  },
    {
    name: "Meals App",
    desc: "A clean, responsive meals browsing app with category filtering and dynamic API integration built using Angular.",
    tech: [
      "HTML",
      "SCSS",
      "TypeScript",
      "TailwindCSS",
      "Flowbite",
      "Angular",
      "API Integration"
    ],
    github: "https://github.com/Esraasamyzakria/assignmentscssmeals",
    live: "https://assignmentscssmeals.vercel.app/category/all",
    image: "image/pro7.png",
    aos: "fade-down"
  },
  {
    name: "Start Framework",
    desc: "A simple and clean Angular starter template showcasing reusable components, routing, and responsive UI structure.",
    tech: [
      "HTML",
      "SCSS",
      "TypeScript",
      "TailwindCSS",
      "Flowbite",
      "Angular",
      "API Integration"
    ],
    github: "https://github.com/Esraasamyzakria/START-FRAMEWORK",
    live: "",
    image: "image/pro10.png",
    aos: "zoom-out"
  },
  {
  name: "DevFolio Website",
  desc: "A responsive developer portfolio website built using HTML, SCSS, Bootstrap, and JavaScript to showcase skills and projects.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/Esraasamyzakria/DevFolio-website",
  live: "",
  image: "image/pro12.png",
  aos: "fade-right"
},
{
  name: "DANIELS Website",
  desc: "A responsive website project built using HTML, SCSS, Bootstrap, and JavaScript to demonstrate layout and UI design skills.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/Esraasamyzakria/DANIELS-website",
  live: "",
  image: "image/pro15.png",
  aos: "fade-right"
},

{
  name: "Bookmarker Website",
  desc: "A set of JavaScript-based frontend Bookmarker and exercises built using HTML, SCSS, Bootstrap, and JavaScript.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/Esraasamyzakria/assigmentsjs2",
  live: "",
  image: "image/pro13.png",
  aos: "fade-left"
},
{
  name: "Smart Login System",
  desc: "A simple login page project built using HTML, SCSS, Bootstrap, and JavaScript to practice authentication UI.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/Esraasamyzakria/assignlogin",
  live: "",
  image: "image/pro14.png",
  aos: "fade-up"
},
{
  name: "Weather",
  desc: "A weather app project built using HTML, SCSS, Bootstrap, and JavaScript to fetch and display dynamic weather data.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/Esraasamyzakria/fialyweather",
  live: "",
  image: "image/pro16.png",
  aos: "fade-left"
},

  {
  name: "Quote of the Day",
  desc: "A collection of small frontend assignments and exercises built using HTML, SCSS, Bootstrap, and JavaScript.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/Esraasamyzakria/assignments",
  live: "",
  image: "image/pro11.png",
  aos: "fade-up"
},


  {
  name: "Mealify Website",
  desc: "A responsive food-themed website built with HTML, SCSS, and Bootstrap, delivering clean UI and smooth user experience.",
  tech: [
    "HTML",
    "SCSS",
    "Bootstrap"
  ],
  github: "https://github.com/Esraasamyzakria/Mealify-website",
  image: "image/pro9.png",
  aos: "fade-right"
},
  
];



}
