import { FlowbiteService } from './core/services/flowbite.service';

import { RouterOutlet } from '@angular/router';
import { Component, AfterViewInit, inject } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
    private readonly flowbiteService =  inject(FlowbiteService);

  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite();
  }
  
  
}
