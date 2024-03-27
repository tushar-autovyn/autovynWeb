import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../default.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    // jQuery("#myselector").style="display: none;"; 
  //   $(function () {
  //     $(window).on('scroll', function () {
  //       if ($(this).scrollTop() > 120) {
  //         $('.navbar-section').addClass("is-sticky");
  //       }
  //       else {
  //         $('.navbar-section').removeClass("is-sticky");
  //       }
  //     });
  //   })
 }

}
