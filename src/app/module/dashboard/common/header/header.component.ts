import { Component, HostListener } from '@angular/core';

// import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../default.scss']
})
export class HeaderComponent {

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (window.scrollY > 120) {
  //     $('.navbar-section').addClass("is-sticky");
  //   } else {
  //     $('.navbar-section').removeClass("is-sticky");
  //   }

  // }
}
