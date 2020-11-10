import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "./error.component";
import { ErrorRoutingModule } from "./error-routing.module";

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule],
  bootstrap: [ErrorComponent]
})
export class ErrorModule {}
