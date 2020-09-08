import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule, IGlobalAppSettings } from '@app/core';
import { GlobalAppSettingsService } from '@app/globalAppSettings.service';

import { environment } from '@env/environment';
import { ENVIRONMENT } from '@env/environment.token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(), environment.imports || []],
  providers: [{ provide: ENVIRONMENT, useValue: environment }, { provide: IGlobalAppSettings, useClass: GlobalAppSettingsService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
