import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxMenuComponent } from "./ngx-menu/ngx-menu.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [NgxMenuComponent],
  exports: [NgxMenuComponent]
})
export class SharedModule {}
