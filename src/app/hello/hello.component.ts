import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-hello',
  templateUrl: `./hello.component.html`,
})
export class HelloComponent  {
  @Input() name: string;

  count$: Observable<number>

  constructor(
    private store: Store<{count: number}>
  ) {
    this.count$ = store.select('count')
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
