import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../counter.actions';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() footerStyle: boolean = false;
  count$?: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
}