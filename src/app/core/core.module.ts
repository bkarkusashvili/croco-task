import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponents, LayoutComponent } from './components';

@NgModule({
  declarations: [...CoreComponents],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
