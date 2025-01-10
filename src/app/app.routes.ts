import { Routes } from '@angular/router';
import {HomeComponent} from './components/homepage/home/home.component';
import {BatchListComponent} from './components/batch/batch-list/batch-list.component';
import {BatchDetailComponent} from './components/batch/batch-detail/batch-detail.component';
import {FormCreazioneBatchComponent} from './components/batch/form-creazione-batch/form-creazione-batch.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'batches', component: BatchListComponent },
  { path: 'batches/:id', component: BatchDetailComponent },
  { path: 'form', component: FormCreazioneBatchComponent }

];
