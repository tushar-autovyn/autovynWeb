import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../default.scss']
})
export class HomeComponent {
  @Input() isLoading: boolean = false;
}
