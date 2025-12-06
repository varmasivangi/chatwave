import { Component, Input } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
// import { HeaderComponent } from "./header/header.component";
// import { SidebarComponent } from "./sidebar/sidebar.component";
// import { RouterOutlet } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @Input() data:any;
}
