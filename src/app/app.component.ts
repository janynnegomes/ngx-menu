import { Component, OnInit, VERSION } from "@angular/core";
import { MenuItem } from "./shared/ngx-menu/menu.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.items = new Map();
    this.items.set(0, new MenuItem("Home", "home"));
    this.items.set(1, new MenuItem("Projects", "work"));
    this.items.set(2, new MenuItem("Services", "favourite"));
    this.items.set(3, new MenuItem("Contact", "message"));
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
