import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AuctionsSliderComponent } from "./auctions-slider.component";
import { FooComponent } from "./foo.component";

/** Model. */
export interface IAuctionsModel {
  /** Search query. */
  query: string;
}

/** Pagination. */
export interface IAuctionsPagination {
  current_page: number;
  total_pages: number;
}

@Component({
  standalone: true,
  imports: [AuctionsSliderComponent, FooComponent, CommonModule],
  template: `
    <app-auctions-slider ngSkipHydration />
    <app-foo />
    hi
    <div *ngFor="let auction of auctions">
      {{ auction.name }}
    </div>
  `,
})
export class AuctionsComponent {
  public auctions = [{ name: "foo" }];

  constructor() {
    console.log("AuctionsComponent");
  }
}
