import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DocsComponent} from './docs.component';

const routes: Routes = [
  {
    path: ':doc',
    component: DocsComponent,
  },
  {
    path: '**',
    component: DocsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

