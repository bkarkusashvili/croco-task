import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { take } from 'rxjs';

@Component({
  selector: 'app-svg-icon',
  template: `<span [innerHTML]="icon"></span>`,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input()
  public url?: string;

  icon?: SafeHtml;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (!this.url) {
      this.icon = '';
      return;
    }

    this.http
      .get(this.url, { responseType: 'text' })
      .pipe(take(1))
      .subscribe((value) => {
        this.icon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }

  ngOnChanges(): void {}
}
