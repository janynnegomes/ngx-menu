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

    //   { label: "Projects", icon: "work" },

    //   { label: "Services", icon: "favourite" },

    //   { label: "Contact", icon: "message" }
    // ];
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
