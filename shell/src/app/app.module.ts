import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent, pathMatch: 'full' },
        {
          matcher: startsWith('computassere'),
          component: WrapperComponent,
          data: {
            importName: 'computassere',
            elementName: 'computassere-element',
          },
        },
        {
          matcher: startsWith('mfe3'),
          component: WrapperComponent,
          data: { importName: 'mfe3', elementName: 'mfe3-element' },
        },
        {
          matcher: startsWith('computas'),
          component: WrapperComponent,
          data: { importName: 'computas', elementName: 'computas-element' },
        },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
  ],
  declarations: [AppComponent, WrapperComponent, NavigationComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}