/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideServerRendering } from "@angular/platform-server";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { appConfig } from "./app.config";
import { routes } from "./app.routes";

const serverConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideServerRendering(),
    provideRouter(routes, withComponentInputBinding()),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
