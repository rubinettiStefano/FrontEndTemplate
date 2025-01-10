import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RiceBatchDTORidotto} from '../../../model/RiceBatchDTORidotto';
import {RouterLink} from '@angular/router';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-single-batch-card',
  imports: [
    RouterLink
  ],
  templateUrl: './single-batch-card.component.html',
  standalone: true,
  styleUrl: './single-batch-card.component.css'
})
export class SingleBatchCardComponent {

  @Input() batch:RiceBatchDTORidotto|null = null;
  @Output() batchDeleted: EventEmitter<number> = new EventEmitter<number>();


  constructor(private serv:HttpService) {  }

  cancella()
  {
    if(confirm('O vuoi cancellare sicuro?'))
    this.serv.deleteRiceBatch(this.batch!.id).subscribe(
      ()=>
      {
        this.batchDeleted.emit(this.batch!.id);
      }
    );
  }
}
