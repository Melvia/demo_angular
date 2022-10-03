import { Directive } from '@angular/core';
import { ViewContainerRef, TemplateRef, Input } from '@angular/core';
@Directive({
  selector: '[appWhile]',
})
export class WhileDirective {
  @Input() set appWhile(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
