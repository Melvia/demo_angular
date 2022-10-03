import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @ViewChild(ChildComponentComponent, { static: false })
  private counterComponent: ChildComponentComponent | undefined;

  @ViewChild('nameText', { static: false })
  nameParagraph: ElementRef | undefined;

  @ContentChild('headerContent', { static: false })
  name: string = 'Tom';

  change() {
    if (this.nameParagraph !== undefined) {
      this.nameParagraph.nativeElement.textContent = 'hell';
    }

    if (this.nameParagraph !== undefined) {
      this.nameParagraph.nativeElement.textContent = 'hell';
    }
  }

  increment() {
    this.counterComponent?.increment();
  }
  decrement() {
    this.counterComponent?.decrement();
  }

  //ngSwitch
  count: number = 5;

  //structure Directive
  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }
}
