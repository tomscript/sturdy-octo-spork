import { CommonModule, DOCUMENT, isPlatformBrowser } from "@angular/common";
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-auctions-slider",
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      src="/assets/img/header-1.jpg"
      class="image"
      [ngClass]="{ hide: index !== 0 }"
    />
    <img
      src="/assets/img/header-2.jpg"
      class="image"
      [ngClass]="{ hide: index !== 1 }"
    />
  `,
})
export class AuctionsSliderComponent implements OnInit, OnDestroy {
  public display = false;
  /** Current photo being displayed. */
  public index = 0;
  /** Interval ID. */
  public id: any = 0;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: string,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const els = this.document.getElementsByClassName("outer");
      // If commented out w/ngSkipHydration will hydrate
      // If not commented out w/ngSkipHydration will not hydrate
      this.id = setInterval(
        () => (this.index = (this.index + 1) % els.length),
        10_000
      );
      console.log("commented out - should hyrdate");
    }
    console.log("foo");
    console.log("bar");
    console.log("baz");
  }

  ngOnDestroy(): void {
    clearInterval(this.id);
  }
}
