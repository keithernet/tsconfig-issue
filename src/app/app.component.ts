import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Test} from '@test/test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  test: Test = {};
}
