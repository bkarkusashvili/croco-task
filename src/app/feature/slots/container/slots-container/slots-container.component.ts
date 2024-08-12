import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { SlotServiceService } from '../../services';
import { SlotCategory, SlotGame, SlotProvider } from '../../interfaces';

@Component({
  selector: 'app-slots-container',
  templateUrl: './slots-container.component.html',
  styleUrls: ['./slots-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsContainerComponent implements OnInit {
  public data$: Observable<[SlotCategory[], SlotProvider[], any]>;

  public games: SlotGame[] = [];

  constructor(
    public slotService: SlotServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.data$ = combineLatest([
      this.slotService.getSlotCategories(),
      this.slotService.getProviders(),
      this.activeRoute.params,
    ]).pipe(
      tap(([categories, _, params]) => {
        if (!params['category']) {
          this.router.navigate(['/slot', categories[0].category]);
        }

        this.games =
          categories.find((item) => item.category === params['category'])
            ?.games || [];

        if (params['provider']) {
          this.games = this.games.filter(
            (item) => item.provider === params['provider']
          );
        }
      })
    );
  }

  ngOnInit(): void {}
}
