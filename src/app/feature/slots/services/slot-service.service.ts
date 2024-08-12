import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SlotCategoryrResponse, SlotProviderResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SlotServiceService {
  constructor(private http: HttpClient) {}

  getSlotCategories() {
    return this.http
      .get<SlotCategoryrResponse>(environment.APIV2 + '/slot/categories', {
        params: { include: 'games' },
      })
      .pipe(
        map((response) => {
          return response.data.filter(
            (item) =>
              (item.platform === 'desktop' || item.platform === 'all') &&
              item.games.length
          );
        })
      );
  }

  getProviders() {
    return this.http
      .get<SlotProviderResponse>(environment.API, {
        params: { type: 'slot', platform: 'desktop' },
      })
      .pipe(map((response) => response.data));
  }
}
