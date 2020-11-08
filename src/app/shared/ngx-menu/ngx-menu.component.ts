import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "ngx-menu",
  templateUrl: "./ngx-menu.component.html",
  styleUrls: ["./ngx-menu.component.scss"]
})
export class NgxMenuComponent {
  position: string = "left";
  isOpen: boolean = false;

  @Input()
  items: Array<any> = [];

  @Output()
  opened = new EventEmitter();

  @Output()
  closed = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;

    this.opened.emit(this.isOpen ? "opened" : "closed");
  }
}
