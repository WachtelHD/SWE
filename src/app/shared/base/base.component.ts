import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export abstract class BaseComponent implements OnDestroy {
  protected componentDestroyed$: Subject<void> = new Subject<void>();
  protected constructor() {}
  public ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
