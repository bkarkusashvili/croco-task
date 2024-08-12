import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatchResult } from '@angular/router';

import { SlotsContainerComponent } from './container';

const routes: Routes = [
  {
    matcher: (segment) => {
      const newSegment: UrlMatchResult = {
        consumed: segment,
        posParams: {},
      };

      if (segment.length === 1) {
        newSegment.posParams = { category: segment[0] };
      }

      if (segment.length === 2) {
        newSegment.posParams = { category: segment[0], provider: segment[1] };
      }

      return newSegment;
    },
    component: SlotsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotsRoutingModule {}
