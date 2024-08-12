import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedComponents } from './components';

@NgModule({
  declarations: [...SharedComponents],
  imports: [CommonModule, HttpClientModule],
  exports: [...SharedComponents],
})
export class SharedModule {}
