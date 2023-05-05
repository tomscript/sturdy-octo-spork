import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: import("./auctions/auctions.component"),
  },
  {
    path: "bar",
    loadComponent: () => import("./auctions/auctions.component"),
  },
];
