import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { SimpleMultiPanelComponent } from './components/simple-multi-panel/simple-multi-panel.component';
import { SampleSidebarComponent } from './components/sample-sidebar/sample-sidebar.component';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import { PATH } from '../generated/contribution-constants';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const httpLoaderFactory = (http: HttpBackend) =>
    new MultiTranslateHttpLoader(http, [
        { prefix: PATH + '/assets/i18n/', suffix: '.json' },
        { prefix: './ui/assets/i18n/', suffix: '.json' },
    ]);

@NgModule({
    declarations: [
        SimpleMultiPanelComponent,
        SampleSidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UIAngularComponentsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useFactory: httpLoaderFactory, deps: [HttpBackend] },
            useDefaultLang: false,
        })
    ],
    providers: [],
})

export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const simplemultipanelComponent = createCustomElement(SimpleMultiPanelComponent, {injector: this.injector});
        customElements.define('urcaps-r-us-simple-multi-panel-simple-multi-panel', simplemultipanelComponent);
        const sampleSidebarComponent = createCustomElement(SampleSidebarComponent, {injector: this.injector});
        customElements.define('urcaps-r-us-simple-multi-panel-sample-sidebar', sampleSidebarComponent);
    }

    // This function is never called, because we don't want to actually use the workers, just tell webpack about them
    registerWorkersWithWebPack() {
        new Worker(new URL('./components/simple-multi-panel/simple-multi-panel.behavior.worker.ts'
            /* webpackChunkName: "simple-multi-panel.worker" */, import.meta.url), {
            name: 'simple-multi-panel',
            type: 'module'
        });
        new Worker(new URL('./components/sample-sidebar/sample-sidebar.behavior.worker.ts'
            /* webpackChunkName: "sample-sidebar.worker" */, import.meta.url), {
            name: 'sample-sidebar',
            type: 'module'
        });
    }
}

