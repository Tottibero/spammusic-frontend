import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Home',
      icon: 'fas fa-home',
      url: '/home',
    },
    {
      title: 'Discs',
      icon: 'fas fa-compact-disc',
      url: '/discs',
    },
    {
      title: 'Calendar',
      icon: 'fas fas fa-calendar-alt',
      url: 'parent',
      subMenu:[
        {title: 'Calendar', url: '/calendar'},
        {title: 'Anticipated ', url: '/anticipated'},
      ]
      
    },
    {
      title: 'Statistics',
      icon: 'fas fa-chart-bar',
      url: '/statistics',
    }
  ]

  constructor() { }
}
