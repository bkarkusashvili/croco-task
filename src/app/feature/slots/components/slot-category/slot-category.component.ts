import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SlotCategory, SlotProvider } from '../../interfaces';

@Component({
  selector: 'app-slot-category',
  templateUrl: './slot-category.component.html',
  styleUrls: ['./slot-category.component.scss'],
})
export class SlotCategoryComponent implements OnInit {
  @Input() categories: SlotCategory[] = [];
  @Input() providers: SlotProvider[] = [];

  public category = this.activeRoute.snapshot.paramMap.get('category');
  public provider = this.activeRoute.snapshot.paramMap.get('provider');

  public limit = 10;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((params) => {
      this.category = params['category'];
      this.provider = params['provider'];
    });
  }

  ngOnInit(): void {}

  togleLimit(): void {
    this.limit = this.limit === 10 ? this.providers.length : 10;
  }
}
