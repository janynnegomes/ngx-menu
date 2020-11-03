import { Component, ContentChild, Input, TemplateRef } from "@angular/core";

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

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
