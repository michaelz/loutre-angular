import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routerTransition } from '../router.animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [ routerTransition ],

  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle('À propos | Loutre.ch');

  }

}
