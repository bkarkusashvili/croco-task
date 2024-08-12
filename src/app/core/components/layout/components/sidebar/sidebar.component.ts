import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems = [
    { icon: 'sport', link: '/sport', text: 'Sport' },
    { icon: 'live', link: '/live', text: 'Live' },
    { icon: 'slot', link: '/slot', text: 'Slots' },
    { icon: 'casino', link: '/casino', text: 'Casino' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
