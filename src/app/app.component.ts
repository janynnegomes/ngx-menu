import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  items = [
    { label: "Home", icon: "home" },

    { label: "Projects", icon: "work" },

    { label: "Services", icon: "favourite" },

    { label: "Contact", icon: "message" }
  ];

  menuClosed(state) {
    console.log(state);
  }

  menuOpened(state) {
    console.log(state);
  }
}
