import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule, FontAwesomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
