import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule],
  template: ` <h2>foo</h2> `,
})
export class FooComponent {}
