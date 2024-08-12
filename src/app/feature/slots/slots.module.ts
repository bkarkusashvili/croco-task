import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SlotsRoutingModule } from './slots-routing.module';

import { SlotsComponents } from './components';
import { SlotsContainerComponent } from './container';
import { SlotServiceService } from './services';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SlotsContainerComponent, ...SlotsComponents],
  imports: [CommonModule, HttpClientModule, SharedModule, SlotsRoutingModule],
  providers: [SlotServiceService],
})
export class SlotsModule {}
