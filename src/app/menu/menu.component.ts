import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

//  menu ouvert et fermé  
isCollapsed: boolean = false;

//le titre qui apparait  au niveau du logo
@Input() title: string;
@Input() color:string = 'light';

toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
}

swhitchTheme() {
  this.color = ('light' === this.color) ? 'dark' : 'light';
}
}
