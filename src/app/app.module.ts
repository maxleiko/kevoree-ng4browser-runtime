import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgGridModule } from 'angular2-grid';

import { Ng2Webstorage, LocalStorageService } from 'ngx-webstorage';
// import { CodemirrorModule } from 'ng2-codemirror';
import { routing } from './app.routing';

// app root
import { AppComponent } from './app.component';
// app services
import { LoggerService } from './services/logger.service';
import { LoggerFactoryService } from './services/logger-factory.service';
import { KevoreeCoreService } from './services/core.service';
import { TinyConfService } from './services/tiny-conf.service';
import { KevScriptService } from './services/kevscript.service';
import { ResolverService } from './services/resolver.service';
import { InstallerService } from './services/installer.service';
// app pages
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
// app components
import { NavBarComponent } from './components/navbar/navbar.component';
import { LoggerComponent } from './components/logger/logger.component';
import { KevScriptComponent } from './components/kevscript/kevscript.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TileComponent } from './components/tile/tile.component';
// app pipes
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KevScriptComponent,
    DashboardComponent,
    TileComponent,
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
    NgGridModule,
    Ng2Webstorage,
  ],
  providers: [
    LoggerService,
    ResolverService,
    TinyConfService,
    InstallerService,
    KevScriptService,
    KevoreeCoreService,
    LoggerFactoryService,
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
