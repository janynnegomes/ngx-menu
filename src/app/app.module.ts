import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
