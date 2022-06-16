import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
   this.menuMobile();
   this.menuDesktop();

  }
  
  menuMobile() {
    $('.menu-hamburger ').click(function() {
      $('#hamburger').toggleClass('icon-none');
      $('#icon-close').toggleClass('icon-none');
      $('.svg').toggleClass('menu-open');
      $('.menu-mobile').slideToggle('slow');
    });
  }

  menuDesktop() {
    $('.menu-resultados').click(function() {
      $('#seta-down').toggleClass('icon-none');
      $('#seta-up').toggleClass('icon-none');
      $('.menu-desktop-open').toggleClass('menu-open');
      $('.menu-desktop-open').slideToggle('slow');
    });
  }
}
