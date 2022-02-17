import { Component } from '@angular/core';
import { Computasser, computassere } from './computassere';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  readonly computassere: Computasser[] = computassere;
}
