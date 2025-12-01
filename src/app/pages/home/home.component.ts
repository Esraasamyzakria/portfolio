import { Component } from '@angular/core';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { SkilsComponent } from "../skils/skils.component";
import { ServicesComponent } from "../servicesss/services.component";
import { PorductComponent } from "../porduct/porduct.component";
import { ContactComponent } from "../contact/contact.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [PortfolioComponent, SkilsComponent, ServicesComponent, PorductComponent, ContactComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode = false;

setDarkMode() {
  this.isDarkMode = true;
  document.documentElement.classList.add('dark'); 
}

setLightMode() {
  this.isDarkMode = false;
  document.documentElement.classList.remove('dark'); 
}


}
