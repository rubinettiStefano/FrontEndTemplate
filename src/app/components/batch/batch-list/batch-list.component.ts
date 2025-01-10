import { Component } from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {RiceBatchDTORidotto} from '../../../model/RiceBatchDTORidotto';
import {SingleBatchCardComponent} from '../single-batch-card/single-batch-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-batch-list',
  imports: [
    SingleBatchCardComponent,
    NgForOf
  ],
  templateUrl: './batch-list.component.html',
  standalone: true,
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent
{
  batches: RiceBatchDTORidotto[] = [];

  constructor(private serv:HttpService) {

    serv.getAllRiceBatch().subscribe(
      batchesLettiDaBackend=>
      {
        this.batches = batchesLettiDaBackend;
      }
    );
  }

  rimuoviDaVettore($event: number)
  {
    this.batches = this.batches.filter(b=>b.id!==$event);
  }
}
