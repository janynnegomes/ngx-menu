import { Component, VERSION } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  items = [
    { label: "Home", icon: faCoffee },

    { label: "Projects", icon: "fa-home" },

    { label: "Services", icon: "fa-home" },

    { label: "Contact", icon: "fa-home" }
  ];
}
