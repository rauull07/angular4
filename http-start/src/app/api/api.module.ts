/**
 * Created by rauull07 on 7/3/2017.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { PetApi } from './api/PetApi';
import { StoreApi } from './api/StoreApi';
import { UserApi } from './api/UserApi';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ PetApi, StoreApi, UserApi ]
})
export class ApiModule {
  public static forConfig(configuration: Configuration): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [ {provide: Configuration, useValue: configuration}]
    }
  }
}
