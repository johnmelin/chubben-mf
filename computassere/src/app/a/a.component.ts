import { Component } from '@angular/core';
import { Computasser, computassere } from '../computassere';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent {
  readonly computassere: Computasser[] = computassere;
}
