import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionItemComponent {
  @Input()
  public title = '';

  @Input()
  public accordionId = '';

  private openSubject = new BehaviorSubject(true);

  public open$ = this.openSubject.asObservable();

  public toggle() {
    this.open$.pipe(take(1)).subscribe((value) => {
      this.openSubject.next(!value);
    });
  }
}
