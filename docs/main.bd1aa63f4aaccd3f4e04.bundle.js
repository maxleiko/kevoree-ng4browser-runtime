webpackJsonp([1],{"./src async recursive":function(e,t){function o(e){throw new Error("Cannot find module '"+e+"'.")}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id="./src async recursive"},"./src/app/app.component.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".main-container{margin-top:15px}",""]),e.exports=e.exports.toString()},"./src/app/app.component.html":function(e,t){e.exports='<app-nav-bar></app-nav-bar>\n<div class="main-container">\n  <router-outlet></router-outlet>\n</div>\n<app-logger></app-logger>\n'},"./src/app/app.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./src/app/services/logger.service.ts"),s=o(0),i=o.n(s);o.d(t,"a",function(){return p});var a=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){this.logger=e;var t=new i.a.factory.DefaultKevoreeFactory;e.info("Kevoree MetaModel v"+t.getVersion())}return e}();p=a([o.i(n.F)({selector:"app-root",template:o("./src/app/app.component.html"),styles:[o("./src/app/app.component.css")]}),c("design:paramtypes",["function"==typeof(l=void 0!==r.a&&r.a)&&l||Object])],p);var l},"./src/app/app.module.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js"),r=o("./node_modules/@angular/core/@angular/core.es5.js"),s=o("./node_modules/@angular/forms/@angular/forms.es5.js"),i=o("./node_modules/@ng-bootstrap/ng-bootstrap/index.js"),a=o("./node_modules/ngx-webstorage/dist/app.js"),c=o("./src/app/app.routing.ts"),p=o("./src/app/app.component.ts"),l=o("./src/app/services/logger.service.ts"),u=o("./src/app/services/kevoree-core.service.ts"),d=o("./src/app/services/tiny-conf.service.ts"),f=o("./src/app/services/kevscript.service.ts"),g=o("./src/app/services/resolver.service.ts"),v=o("./src/app/pages/home/home.component.ts"),h=o("./src/app/pages/settings/settings.component.ts"),m=o("./src/app/pages/not-found/not-found.component.ts"),b=o("./src/app/components/navbar/navbar.component.ts"),y=o("./src/app/components/logger/logger.component.ts"),R=o("./src/app/components/kevscript/kevscript.component.ts"),j=o("./src/app/components/dashboard/dashboard.component.ts"),x=o("./src/app/pipes/safe.pipe.ts");o.d(t,"a",function(){return O});var w=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},_=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(){function e(e,t,o,n,r){this.logger=e,this.storage=t,this.config=o,this.kevs=n,this.core=r}return e}();O=w([o.i(r.b)({declarations:[p.a,b.a,R.a,j.a,y.a,v.a,h.a,m.a,x.a],imports:[n.a,c.a,s.a,i.a.forRoot(),a.a],providers:[l.a,d.a,f.a,u.a,g.a],bootstrap:[p.a]}),_("design:paramtypes",["function"==typeof(k=void 0!==l.a&&l.a)&&k||Object,"function"==typeof(S=void 0!==a.b&&a.b)&&S||Object,"function"==typeof(T=void 0!==d.a&&d.a)&&T||Object,"function"==typeof(P=void 0!==f.a&&f.a)&&P||Object,"function"==typeof(L=void 0!==u.a&&u.a)&&L||Object])],O);var k,S,T,P,L},"./src/app/app.routing.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/router/@angular/router.es5.js"),r=o("./src/app/pages/home/home.component.ts"),s=o("./src/app/pages/settings/settings.component.ts"),i=o("./src/app/components/dashboard/dashboard.component.ts"),a=o("./src/app/pages/not-found/not-found.component.ts");o.d(t,"a",function(){return p});var c=[{path:"home",component:r.a},{path:"settings",component:s.a},{path:"dashboard",component:i.a},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:a.a}],p=n.a.forRoot(c,{useHash:!0})},"./src/app/components/dashboard/dashboard.component.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".tile-container{background-color:#fff;display:inline-block;margin:5px;width:302px;height:327px;border:1px solid #999}.tile-container .tile-header{padding:0 5px;height:25px;width:300px;overflow:hidden;text-overflow:ellipsis;line-height:25px;border-bottom:1px solid #999;background-color:#333}.tile-container .tile-header .tile-name{font-size:16px;height:25px;line-height:25px}.tile-container .tile-stopped{z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;background-color:#000;opacity:.55;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:300px;height:300px;font-size:2em;color:#fff}.tile-container .tile{border:none;width:300px;height:300px}",""]),e.exports=e.exports.toString()},"./src/app/components/dashboard/dashboard.component.html":function(e,t){e.exports='<div class="dashboard">\n  <div *ngFor="let tile of tiles" class="tile-container">\n    <div class="tile-header">\n      <span class="tile-name">{{ tile.name }}: {{ tile.type }}</span>\n    </div>\n    <div class="tile-stopped" *ngIf="!tile.started">\n      <span>STOPPED</span>\n    </div>\n    <iframe\n      id="tile-{{ tile.name }}"\n      [src]="tile.src | safe"\n      class="tile">\n    </iframe>\n  </div>\n</div>\n'},"./src/app/components/dashboard/dashboard.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./node_modules/@angular/router/@angular/router.es5.js"),s=o("./src/app/services/kevoree-core.service.ts");o.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){var o=this;this.core=e,this.router=t,this.tiles=[],this.core.state.getValue()===s.b.STARTED?this.core.onDeploy.subscribe(function(e){Object.keys(e).forEach(function(t){if(!o.tiles.find(function(e){return e.path===t})){var n=e[t].getModelEntity();n&&o.tiles.push({path:t,name:e[t].getName(),type:n.typeDefinition.name+"/"+n.typeDefinition.version,src:"/assets/iframes/tile.html?path="+encodeURI(t),started:e[t].started})}})}):t.navigate(["home"])}return e}();c=i([o.i(n.F)({selector:"app-dashboard",template:o("./src/app/components/dashboard/dashboard.component.html"),styles:[o("./src/app/components/dashboard/dashboard.component.css")]}),a("design:paramtypes",["function"==typeof(p=void 0!==s.a&&s.a)&&p||Object,"function"==typeof(l=void 0!==r.b&&r.b)&&l||Object])],c);var p,l},"./src/app/components/kevscript/kevscript.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o(0),s=(o.n(r),o(1)),i=(o.n(s),o("./src/app/services/kevscript.service.ts")),a=o("./src/app/services/kevoree-core.service.ts");o.d(t,"a",function(){return l});var c=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,o){this.renderer=e,this.kevs=t,this.core=o,this.scriptChanged=new n.h,this.factory=new r.factory.DefaultKevoreeFactory}return e.prototype.ngAfterViewInit=function(){var e=this;s.hint.kevscript.async=!0,this.editor=new s(this.renderer.selectRootElement("#kevscript-editor"),{mode:"kevscript",theme:"kevscript",lineWrapping:!0,lineNumbers:!0,styleActiveLine:!0,extraKeys:{"Ctrl-Space":function(t){window.cm=t,t.showHint({hint:s.hint.kevscript,getModel:function(){return e.getModel()},completeSingle:!1,alignWithWord:!1})}},gutters:["CodeMirror-lint-markers"],lint:{getAnnotations:s.lint.kevscript(this.kevs.getInstance(),function(){return e.getModel()},this.ctxVars),async:!0}}),this._script&&this.editor.setValue(this._script),this.editor.refresh(),this.editor.on("changes",function(t){e._script=t.getValue(),e.scriptChanged.emit(e._script)})},Object.defineProperty(e.prototype,"script",{get:function(){return this._script},set:function(e){this.editor&&e!==this._script&&this.editor.setValue(e),this._script=e,this.scriptChanged.emit(this._script)},enumerable:!0,configurable:!0}),e.prototype.getModel=function(){var e=this.core.getModel();return e||(e=this.factory.createContainerRoot().withGenerated_KMF_ID("0.0"),this.factory.root(e)),e},e}();c([o.i(n.G)(),p("design:type","function"==typeof(u=void 0!==n.h&&n.h)&&u||Object)],l.prototype,"scriptChanged",void 0),c([o.i(n.r)(),p("design:type",String),p("design:paramtypes",[String])],l.prototype,"script",null),l=c([o.i(n.F)({selector:"app-kevscript",template:'<div id="kevscript-editor"></div>',styles:["#kevscript-editor { height: 400px; }"]}),p("design:paramtypes",["function"==typeof(d=void 0!==n.q&&n.q)&&d||Object,"function"==typeof(f=void 0!==i.a&&i.a)&&f||Object,"function"==typeof(g=void 0!==a.a&&a.a)&&g||Object])],l);var u,d,f,g},"./src/app/components/logger/logger.component.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,"*{font-family:DeJaVu Mono,monospace;z-index:1000}pre{margin:0}.logger-container{position:fixed;left:0;bottom:0;right:0;height:27px;border:1px solid #ccc;background-color:#333;overflow:hidden;word-wrap:break-word}.logger-panel.unfold .logger-container{height:400px;overflow-y:scroll}.logger-panel.unfold .logger-actions,.logger-panel.unfold .logger-toggle{bottom:400px}.logger-toggle{font-size:12px;padding:2px 5px;position:fixed;left:5px;bottom:26px;border:1px solid #ccc;border-bottom:none;background-color:#333;border-bottom:1px solid #333;border-top-left-radius:4px;border-top-right-radius:4px}.logger-toggle:hover{cursor:pointer;background-color:#444;color:#fff}.logger-actions{font-size:12px;position:fixed;right:5px;bottom:26px}.logger-actions>.logger-action{padding:2px 5px;border:1px solid #ccc;border-bottom:none;background-color:#333;border-bottom:1px solid #333;border-top-left-radius:4px;border-top-right-radius:4px}.logger-actions>.logger-action:hover{cursor:pointer;background-color:#444;color:#fff}.list-group-item{padding:2px 0;border-radius:0}.list-group-item>*>*{overflow:hidden;text-overflow:ellipsis}.date{text-align:center}.date,.tag{-ms-flex-item-align:start;align-self:flex-start;padding:0 10px;border-right:1px solid #666}.tag{width:150px}.line{-ms-flex-item-align:start;align-self:flex-start;padding:0 10px}",""]),e.exports=e.exports.toString()},"./src/app/components/logger/logger.component.html":function(e,t){e.exports='<div class="logger-panel" [ngClass]="{ \'unfold\': logsVisible }">\n  <span class="logger-toggle" (click)="toggleLogs()">{{ logsVisible ? \'Hide\':\'Show\' }} logs</span>\n  <div class="logger-actions">\n    <span class="logger-action" (click)="reverseLogs()">Reverse</span>\n    <span class="logger-action" (click)="clearLogs()">Clear</span>\n  </div>\n  <div class="logger-container">\n    <div class="logger">\n      <div class="list-group">\n        <div\n          *ngFor="let log of logger.getLogs()"\n          class="list-group-item list-group-item-action list-group-item-{{convertLevel(log.level)}}">\n          <span class="date">\n            <pre><code>{{ log.date | date:\'dd/MM/yy HH:mm:ss\' }}</code></pre>\n          </span>\n          <span class="tag">\n            <pre><code>{{ log.tag }}</code></pre>\n          </span>\n          <span class="line">\n            <pre><code>{{ log.line }}</code></pre>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},"./src/app/components/logger/logger.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./src/app/services/logger.service.ts");o.d(t,"a",function(){return a});var s=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e,t){var o=this;this.logger=e,this.ref=t,this.logsVisible=!1,this.intervalId=setInterval(function(){o.ref.markForCheck()},1e3)}return e.prototype.ngOnDestroy=function(){clearInterval(this.intervalId)},e.prototype.convertLevel=function(e){switch(e){case r.b.DEBUG:return"info";case r.b.WARN:return"warning";case r.b.ERROR:return"danger"}},e.prototype.toggleLogs=function(){this.logsVisible=!this.logsVisible},e.prototype.clearLogs=function(){this.logger.clear()},e.prototype.reverseLogs=function(){this.logger.reverseOrder()},e}();a=s([o.i(n.F)({selector:"app-logger",changeDetection:n.H.Default,template:o("./src/app/components/logger/logger.component.html"),styles:[o("./src/app/components/logger/logger.component.css")]}),i("design:paramtypes",["function"==typeof(c=void 0!==r.a&&r.a)&&c||Object,"function"==typeof(p=void 0!==n.D&&n.D)&&p||Object])],a);var c,p},"./src/app/components/navbar/navbar.component.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".badge{vertical-align:top}",""]),e.exports=e.exports.toString()},"./src/app/components/navbar/navbar.component.html":function(e,t){e.exports='<nav class="navbar navbar-fixed-top navbar-toggleable-md navbar-inverse bg-inverse">\n  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <a class="navbar-brand" [routerLink]="[\'/home\']">\n    <img src="assets/images/kevoree.png" width="61" height="35" alt="">\n  </a>\n\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav mr-auto">\n      <li class="nav-item" [routerLinkActive]="[\'active\']">\n        <a class="nav-link" [routerLink]="[\'/home\']">Home</a>\n      </li>\n      <li class="nav-item" [routerLinkActive]="[\'active\']" *ngIf="core.state.getValue() === 2">\n        <a class="nav-link" [routerLink]="[\'/dashboard\']">\n          Dashboard <span class="badge badge-pill badge-default" *ngIf="tilesCount > 0">{{ tilesCount }}</span>\n        </a>\n      </li>\n    </ul>\n    <ul class="navbar-nav">\n      <li class="nav-item" [routerLinkActive]="[\'active\']">\n        <a class="nav-link" [routerLink]="[\'/settings\']">Settings</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n'},"./src/app/components/navbar/navbar.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./src/app/services/kevoree-core.service.ts");o.d(t,"a",function(){return a});var s=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e){var t=this;this.core=e,e.onDeploy.subscribe(function(e){t.tilesCount=Object.keys(e).length})}return e}();a=s([o.i(n.F)({selector:"app-nav-bar",template:o("./src/app/components/navbar/navbar.component.html"),styles:[o("./src/app/components/navbar/navbar.component.css")]}),i("design:paramtypes",["function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],a);var c},"./src/app/lib/kevoree-instance-loader.ts":function(e,t,o){"use strict";var n=function(){function e(){this.instances={}}return e.prototype.register=function(e,t){this.instances[e]=t},e.prototype.has=function(e){return Boolean(this.instances[e])},e.prototype.require=function(e){var t=this.instances[e];if(t)return t;throw new Error('KevoreeInstance "'+e+'" not found')},e.prototype.remove=function(e){delete this.instances[e]},e.prototype.getInstances=function(){return this.instances},e}();window.KevoreeInstanceLoader=window.KevoreeInstanceLoader||new n,t.a=window.KevoreeInstanceLoader},"./src/app/lib/kevoree-module-loader.ts":function(e,t,o){"use strict";var n=function(){function e(){this.modules={}}return e.prototype.register=function(e,t,o){this.modules[e+"@"+t]=o},e.prototype.has=function(e,t){return Boolean(this.modules[this.createKey(e,t)])},e.prototype.require=function(e,t){var o=this.createKey(e,t),n=this.modules[o];if(n)return n;throw new Error('KevoreeModule "'+o+'" not found')},e.prototype.remove=function(e,t){delete this.modules[this.createKey(e,t)]},e.prototype.createKey=function(e,t){return e+"@"+t},e}();window.KevoreeModuleLoader=window.KevoreeModuleLoader||new n,t.a=window.KevoreeModuleLoader},"./src/app/pages/home/home.component.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".btn-bar{margin-bottom:70px!important}",""]),e.exports=e.exports.toString()},"./src/app/pages/home/home.component.html":function(e,t){e.exports='<div class="container-fluid">\n  <div class="row justify-content-md-center">\n    <div class="col-12 col-md-7">\n      <div class="form-group">\n        <label for="name">Node name</label>\n        <input\n          id="name"\n          type="text"\n          class="form-control"\n          name="name"\n          [(ngModel)]="name"\n          [disabled]="core.state.getValue() === 2"\n          placeholder="eg. node0, myNode">\n      </div>\n\n      <div class="form-group">\n        <label for="script">KevScript</label>\n        <app-kevscript\n          id="script"\n          [script]="script"\n          (scriptChanged)="script=$event"\n          aria-describedby="bootstrapScriptHelp">\n        </app-kevscript>\n        <p id="bootstrapScriptHelp" class="form-text text-muted">\n          This KevScript will be given to the runtime in order to bootstrap it.\n        </p>\n      </div>\n\n      <div class="container form-group btn-bar">\n        <div class="row justify-content-between">\n          <div>\n            <button type="button" class="btn btn-info" (click)="start()" [disabled]="core.state.getValue() !== 0 && core.state.getValue() !== 4">Start</button>\n            <button type="button" class="btn btn-info" (click)="submitScript()" [disabled]="!core.isBootstrapped()">Submit script</button>\n          </div>\n          <button type="button" class="btn btn-warning" (click)="stop()" [disabled]="core.state.getValue() !== 2">Stop</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},"./src/app/pages/home/home.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./src/app/services/logger.service.ts"),s=o("./src/app/services/kevoree-core.service.ts"),i=o("./src/app/services/kevscript.service.ts");o.d(t,"a",function(){return l});var a=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p="// you can now submit script to make changes @runtime :)\n",l=function(){function e(e,t,o){this.core=e,this.logger=t,this.kevs=o,this.core.isBootstrapped()?(this.name=this.core.getNodeName(),this.script=p):(this.name="node"+(Math.floor(1e3*Math.random())+1),this.script="add "+this.name+": JavascriptNode/LATEST/LATEST\nadd "+this.name+".ticker: Ticker/LATEST/LATEST\nadd "+this.name+".printer: ConsolePrinter/LATEST/LATEST\nadd chan: LocalChannel/LATEST/LATEST\n\nbind "+this.name+".ticker.tick chan\nbind "+this.name+".printer.input chan")}return e.prototype.start=function(){var e=this;this.core.state.getValue()!==s.b.INIT&&this.core.state.getValue()!==s.b.STOPPED||this.core.start(this.name).then(function(){return e.kevs.interpret(e.script)}).then(function(t){return e.core.deploy(t)}).then(function(){e.script=p,e.logger.info("Platform bootstrapped successfully :)")})},e.prototype.stop=function(){this.core.state.getValue()!==s.b.STARTING&&this.core.state.getValue()!==s.b.STARTED||this.core.stop()},e.prototype.submitScript=function(){this.core.isBootstrapped()&&this.core.submitScript(this.script)},e}();l=a([o.i(n.F)({template:o("./src/app/pages/home/home.component.html"),styles:[o("./src/app/pages/home/home.component.css")]}),c("design:paramtypes",["function"==typeof(u=void 0!==s.a&&s.a)&&u||Object,"function"==typeof(d=void 0!==r.a&&r.a)&&d||Object,"function"==typeof(f=void 0!==i.a&&i.a)&&f||Object])],l);var u,d,f},"./src/app/pages/not-found/not-found.component.html":function(e,t){e.exports='<div class="container">\n  <h3>Page not found</h3>\n  <p>Sorry, this page does not exist.</p>\n  <a [routerLink]="[\'/home\']">Home</a>\n</div>\n'},"./src/app/pages/not-found/not-found.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js");o.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},s=function(){function e(){}return e}();s=r([o.i(n.F)({template:o("./src/app/pages/not-found/not-found.component.html")})],s)},"./src/app/pages/settings/settings.component.html":function(e,t){e.exports='<div class="container">\n  <form>\n    <div class="form-group">\n      <label for="registry">Registry</label>\n      <input\n        id="registry"\n        type="text"\n        class="form-control"\n        name="registry"\n        [(ngModel)]="registry"\n        (ngModelChange)="updateRegistry($event)"\n        placeholder="https://registry.kevoree.org"\n        aria-describedby="registryHelp">\n      <p id="registryHelp" class="form-text text-muted">\n        Specify the URL of a Kevoree Registry (eg. https://registry.kevoree.org)\n      </p>\n    </div>\n  </form>\n</div>\n'},"./src/app/pages/settings/settings.component.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./node_modules/ngx-webstorage/dist/app.js"),s=o("./src/app/services/logger.service.ts"),i=o("./src/app/services/tiny-conf.service.ts");o.d(t,"a",function(){return p});var a=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e,t,o){this.logger=e,this.config=t,this.storage=o,this.updateRegistry(o.retrieve("registry"))}return e.prototype.updateRegistry=function(e){var t=this;clearTimeout(this.registryTimeout),this.registryTimeout=setTimeout(function(){try{var o=new URL(e);t.config.set({registry:{host:o.host,port:o.port,ssl:"https:"===o.protocol}}),t.logger.info("Kevoree Registry URL: "+e)}catch(o){t.logger.error("Malformed Kevoree Registry URL: "+e)}},800)},e}();a([o.i(r.c)("registry","https://new-registry.kevoree.org"),c("design:type",String)],p.prototype,"registry",void 0),p=a([o.i(n.F)({template:o("./src/app/pages/settings/settings.component.html"),providers:[r.b]}),c("design:paramtypes",["function"==typeof(l=void 0!==s.a&&s.a)&&l||Object,"function"==typeof(u=void 0!==i.a&&i.a)&&u||Object,"function"==typeof(d=void 0!==r.b&&r.b)&&d||Object])],p);var l,u,d},"./src/app/pipes/safe.pipe.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");o.d(t,"a",function(){return a});var s=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e){this.sanitizer=e}return e.prototype.transform=function(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e)},e}();a=s([o.i(n.C)({name:"safe"}),i("design:paramtypes",["function"==typeof(c=void 0!==r.c&&r.c)&&c||Object])],a);var c},"./src/app/services/kevoree-core.service.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./node_modules/rxjs/Rx.js"),s=(o.n(r),o("./node_modules/kevoree-core/kevoree-core.js")),i=o.n(s),a=o("./src/app/services/logger.service.ts"),c=o("./src/app/services/kevscript.service.ts"),p=o("./src/app/services/resolver.service.ts"),l=o("./src/app/lib/kevoree-instance-loader.ts");o.d(t,"b",function(){return u}),o.d(t,"a",function(){return g});var u,d=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.INIT=0]="INIT",e[e.STARTING=1]="STARTING",e[e.STARTED=2]="STARTED",e[e.STOPPING=3]="STOPPING",e[e.STOPPED=4]="STOPPED"}(u||(u={}));var g=function(){function e(e,t,o){var n=this;this.logger=e,this.kevs=t,this.resolver=o,e.debug("Initiating KevoreeCoreService..."),this.state=new r.BehaviorSubject(u.INIT),this.onDeploy=new r.BehaviorSubject([]),this.core=new i.a(t.getInstance(),"_browser_fake_",e),this.core.setBootstrapper({name:"BrowserResolver",bootstrapNodeType:function(e,t,n){var r=t.findNodesByID(e);if(r){var s=r.typeDefinition.select("deployUnits[]/filters[name=platform,value=js]");if(s.size()>0)o.resolve(s.get(0).eContainer()).then(function(e){n(e.err,e.instanceType)}).catch(n);else{var i=new Error("No DeployUnit found for '"+e+"' that matches the 'js' platform");n(i)}}else{var i=new Error("Unable to find '"+e+"' in given model");n(i)}},bootstrap:function(e,t,n){o.resolve(e).then(function(e){n(e.err,e.instanceType)}).catch(n)},resolve:function(e,t,n){o.resolve(e).then(function(e){n(e.err,e.instanceType)}).catch(n)},uninstall:function(t,n){o.uninstall(t).then(n).catch(n),e.debug(this.name,"Uninstalling DeployUnit "+t.name+"@"+t.version+"...")}}),this.core.on("stopped",function(){n.state.next(u.STOPPED)}),this.core.on("deployed",function(){var e=Object.keys(n.core.nodeInstance.adaptationEngine.modelObjMapper.map),t=Object.keys(l.a.getInstances());e.forEach(function(e){var t=n.core.nodeInstance.adaptationEngine.modelObjMapper.map[e];t&&"function"==typeof t.uiFactory&&(l.a.has(e)||l.a.register(e,t))});for(var o=0;o<t.length;o++)!function(o){e.find(function(e){return t[o]===e})||l.a.remove(t[o])}(o);n.onDeploy.next(l.a.getInstances())}),e.debug("KevoreeCoreService initiated")}return e.prototype.start=function(e){return this.state.next(u.STARTING),this.logger.debug("Starting Kevoree core..."),this.core.start(e),this.state.next(u.STARTED),Promise.resolve()},e.prototype.deploy=function(e){var t=this;return new Promise(function(o,n){t.core.deploy(e,function(e){e?n(e):o()})})},e.prototype.submitScript=function(e){this.core.submitScript(e)},e.prototype.stop=function(){var e=this;return this.state.next(u.STOPPING),this.logger.debug("Stopping Kevoree core..."),new Promise(function(t){e.core.on("stopped",t),e.core.stop()})},e.prototype.isBootstrapped=function(){return!!this.core.nodeInstance&&this.core.nodeInstance.started},e.prototype.getNodeName=function(){return this.core.nodeInstance.name},e.prototype.getModel=function(){return this.core.getCurrentModel()},e}();g=d([o.i(n.g)(),f("design:paramtypes",["function"==typeof(v=void 0!==a.a&&a.a)&&v||Object,"function"==typeof(h=void 0!==c.a&&c.a)&&h||Object,"function"==typeof(m=void 0!==p.a&&p.a)&&m||Object])],g);var v,h,m},"./src/app/services/kevscript.service.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./src/app/services/logger.service.ts"),s=o(2),i=o.n(s);o.d(t,"a",function(){return p});var a=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){this.logger=e,e.debug("Initiating KevScriptService..."),this.kevs=new i.a(e),e.debug("KevScriptService initiated")}return e.prototype.interpret=function(e,t){var o=this;return this.logger.debug("Interpreting script:\n"+e),new Promise(function(n,r){o.kevs.parse(e,t||null,function(e,t,s){e?(o.logger.error("KevScript",e.stack),r(e)):n(t)})})},e.prototype.parseModel=function(e){return this.kevs.parseModel(e)},e.prototype.getInstance=function(){return this.kevs},e}();p=a([o.i(n.g)(),c("design:paramtypes",["function"==typeof(l=void 0!==r.a&&r.a)&&l||Object])],p);var l},"./src/app/services/logger.service.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js");o.d(t,"b",function(){return r}),o.d(t,"a",function(){return a});var r,s=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.INFO=0]="INFO",e[e.DEBUG=1]="DEBUG",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR"}(r||(r={}));var a=(function(){function e(){}}(),function(){function e(){this.logs=[],this.reverseLogs=[],this.reverse=!0}return e.prototype.info=function(e,t){t||(t=e,e="BrowserRuntime"),this.addLog({tag:e,line:t,date:new Date,level:r.INFO})},e.prototype.debug=function(e,t){t||(t=e,e="BrowserRuntime"),this.addLog({tag:e,line:t,date:new Date,level:r.DEBUG})},e.prototype.warn=function(e,t){t||(t=e,e="BrowserRuntime"),this.addLog({tag:e,line:t,date:new Date,level:r.WARN})},e.prototype.error=function(e,t){t||(t=e,e="BrowserRuntime"),this.addLog({tag:e,line:t,date:new Date,level:r.ERROR})},e.prototype.setLevel=function(e){},e.prototype.setFilter=function(e){},e.prototype.getLogs=function(){return this.reverse?this.reverseLogs:this.logs},e.prototype.clear=function(){this.logs.length=0,this.reverseLogs.length=0},e.prototype.reverseOrder=function(){this.reverse=!this.reverse},e.prototype.addLog=function(e){this.logs.length>400&&this.logs.shift(),this.logs.push(e),this.reverseLogs.length>400&&this.reverseLogs.pop(),this.reverseLogs.unshift(e)},e}());a=s([o.i(n.g)(),i("design:paramtypes",[])],a)},"./src/app/services/resolver.service.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./src/app/services/logger.service.ts"),s=o("./src/app/lib/kevoree-module-loader.ts");o.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.logger=e,this.msgListener=function(e){}}return e.prototype.resolve=function(e){var t=this;return s.a.has(e.name,e.version)?Promise.resolve({err:null,instanceType:s.a.require(e.name,e.version)}):new Promise(function(o,n){t.logger.debug("ResolverService","Resolving "+e.name+"@"+e.version+"...");var r=document.createElement("iframe");r.id=e.name+"-"+e.version,r.src="/assets/iframes/installer.html?name="+encodeURI(e.name)+"&version="+encodeURI(e.version),r.classList.add("hide");var i=function(t){if(t.origin===window.location.origin)switch(t.data.type){case"error":n({err:new Error(t.data.error)});break;case"done":window.removeEventListener("message",i),o({instanceType:s.a.require(e.name,e.version)})}};window.addEventListener("message",i),document.body.appendChild(r)})},e.prototype.uninstall=function(e){return Promise.resolve()},e}();c=i([o.i(n.g)(),a("design:paramtypes",["function"==typeof(p=void 0!==r.a&&r.a)&&p||Object])],c);var p},"./src/app/services/tiny-conf.service.ts":function(e,t,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./node_modules/ngx-webstorage/dist/app.js"),s=o(3),i=o.n(s),a=o("./src/app/services/logger.service.ts");o.d(t,"a",function(){return l});var c=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t){this.logger=e,this.storage=t,e.debug("Initiating TinyConfService...");var o=new URL(t.retrieve("registry")),n=o.host,r="https:"===o.protocol,s=0===o.port.length?r?443:80:parseInt(o.port,10);i.a.set("registry",{host:n,port:s,ssl:r})}return e.prototype.set=function(e,t){void 0===t?i.a.set(e):i.a.set(e,t)},e.prototype.get=function(e){return i.a.get(e)},e}();l=c([o.i(n.g)(),p("design:paramtypes",["function"==typeof(u=void 0!==a.a&&a.a)&&u||Object,"function"==typeof(d=void 0!==r.b&&r.b)&&d||Object])],l);var u,d},"./src/environments/environment.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n={production:!1}},"./src/main.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./node_modules/@angular/core/@angular/core.es5.js"),r=o("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js"),s=o("./src/app/app.module.ts");o("./src/environments/environment.ts").a.production&&o.i(n.a)(),o.i(r.a)().bootstrapModule(s.a)},0:function(e,t){e.exports=KevoreeLibrary},1:function(e,t){e.exports=CodeMirror},2:function(e,t){e.exports=KevoreeKevscript},3:function(e,t){e.exports=TinyConf},5:function(e,t,o){e.exports=o("./src/main.ts")}},[5]);