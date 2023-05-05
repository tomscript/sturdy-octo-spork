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
import { appConfig } from "./app.config";

const serverConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
