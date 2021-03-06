import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef
} from "@angular/core";
import { Router } from "@angular/router";
import { Menu, MenuItem } from "./menu.model";

@Component({
  selector: "ngx-menu",
  templateUrl: "./ngx-menu.component.html",
  styleUrls: ["./ngx-menu.component.scss"]
})
export class NgxMenuComponent implements OnInit {
  constructor(private router: Router) {}
  position: string = "left";
  menu: Menu;
  /*
  name of mobile template style. Can be: line, grid
  */
  mobileLayout: string = "line"; // l

  isOpen: boolean = false;

  @Input()
  items: Map<number, MenuItem>;

  @Input()
  title: string = "Menu";

  @Output()
  opened = new EventEmitter();

  @Output()
  closed = new EventEmitter();

  ngOnInit(): void {
    this.menu = new Menu(this.title, this.items);
  }

  toggle() {
    this.isOpen = !this.isOpen;

    this.isOpen ? this.opened.emit("opened") : this.closed.emit("closed");
  }

  selectItem(item: number, path: string) {
    this.menu.selectItem(item);
    this.toggle();
    this.goTo(path);
  }
  get itemsList() {
    return Array.from(this.items);
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
