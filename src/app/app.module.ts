import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2Webstorage, LocalStorageService } from 'ngx-webstorage';
import { routing } from './app.routing';

// app root
import { AppComponent } from './app.component';
// app services
import { LoggerService } from './services/logger.service';
import { KevoreeCoreService } from './services/kevoree-core.service';
import { TinyConfService } from './services/tiny-conf.service';
import { KevScriptService } from './services/kevscript.service';
// app pages
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
// app components
import { NavBarComponent } from './components/navbar/navbar.component';
import { LoggerComponent } from './components/logger/logger.component';
import { KevScriptComponent } from './components/kevscript/kevscript.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KevScriptComponent,
    LoggerComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule.forRoot(),
    Ng2Webstorage,
  ],
  providers: [
    LoggerService,
    TinyConfService,
    KevScriptService,
    KevoreeCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: LoggerService,
              private storage: LocalStorageService,
              private config: TinyConfService,
              private kevs: KevScriptService,
              private core: KevoreeCoreService) {}
}
