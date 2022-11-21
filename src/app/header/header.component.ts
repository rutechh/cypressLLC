import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleNav(){
    this.showMenu = !this.showMenu;
  }

}
