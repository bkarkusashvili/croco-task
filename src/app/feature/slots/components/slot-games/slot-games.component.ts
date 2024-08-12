import { Component, Input, OnInit } from '@angular/core';

import { SlotGame } from '../../interfaces';

@Component({
  selector: 'app-slot-games',
  templateUrl: './slot-games.component.html',
  styleUrls: ['./slot-games.component.scss'],
})
export class SlotGamesComponent implements OnInit {
  @Input() games: SlotGame[] = [];

  constructor() {}

  ngOnInit(): void {}
}
