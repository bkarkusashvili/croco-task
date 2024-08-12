import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sport',
    loadChildren: () =>
      import('./feature/sport/sport.module').then((m) => m.SportModule),
  },
  {
    path: 'live',
    loadChildren: () =>
      import('./feature/live/live.module').then((m) => m.LiveModule),
  },
  {
    path: 'slot',
    loadChildren: () =>
      import('./feature/slots/slots.module').then((m) => m.SlotsModule),
  },
  {
    path: 'casino',
    loadChildren: () =>
      import('./feature/casino/casino.module').then((m) => m.CasinoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
