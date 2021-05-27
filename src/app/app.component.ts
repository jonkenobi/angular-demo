import { FooComponent } from './foo/foo.component';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-demo';
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
}
