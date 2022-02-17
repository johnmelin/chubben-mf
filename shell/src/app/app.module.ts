import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          matcher: startsWith('computassere'),
          component: WrapperComponent,
          data: {
            importName: 'computassere',
            elementName: 'computassere-element',
          },
        },
        {
          matcher: startsWith('computas'),
          component: WrapperComponent,
          data: { importName: 'computas', elementName: 'computas-element' },
        },
        {
          matcher: startsWith('karriere'),
          component: WrapperComponent,
          data: { importName: 'karriere', elementName: 'karriere-element' },
        },
        {
          matcher: startsWith('minside'),
          component: WrapperComponent,
          data: { importName: 'minside', elementName: 'minside-element' },
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
