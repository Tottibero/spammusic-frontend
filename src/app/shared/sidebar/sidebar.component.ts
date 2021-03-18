import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any [];

  constructor( private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);
  }

}
