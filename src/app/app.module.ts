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
import { ResolverService } from './services/resolver.service';
// app pages
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
// app components
import { NavBarComponent } from './components/navbar/navbar.component';
import { LoggerComponent } from './components/logger/logger.component';
import { KevScriptComponent } from './components/kevscript/kevscript.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// app pipes
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KevScriptComponent,
    DashboardComponent,
    LoggerComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    SafePipe,
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
    KevoreeCoreService,
    ResolverService
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
