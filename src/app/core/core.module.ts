import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreComponents, LayoutComponent } from './components';

@NgModule({
  declarations: [...CoreComponents],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
