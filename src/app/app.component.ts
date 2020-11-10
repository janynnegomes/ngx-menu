import { Route } from "@angular/compiler/src/core";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "./shared/ngx-menu/menu.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(public route: Router) {}
  ngOnInit(): void {
    this.items = new Map();
    this.items.set(0, new MenuItem("Home", "home", "home"));
    this.items.set(1, new MenuItem("Projects", "projects", "work"));
    this.items.set(2, new MenuItem("Services", "services", "favourite"));
    this.items.set(3, new MenuItem("Contact", "contact", "message"));
  }
  name = "Angular " + VERSION.major;

  items = new Map<number, MenuItem>();

  menuClosed(state) {
    console.log(state);
  }

  menuOpened(state) {
    console.log(state);
  }
}
