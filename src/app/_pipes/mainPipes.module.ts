import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {SafeHtml} from "./SafeHtml.pipe";
import {SafePipe} from "./Safe.pipe";
import {TruncatePipe } from "./Truncate.pipe";

@NgModule({
  declarations:[SafeHtml,SafePipe, TruncatePipe],
  imports:[CommonModule],
  exports:[SafeHtml,SafePipe, TruncatePipe]
})

export class MainPipe{}