import { Component } from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {RiceBatchDTOCompleto} from '../../../model/RiceBatchDTOCompleto';
import {CurrencyPipe, DatePipe, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RiceBatchDTOReq} from '../../../model/RiceBatchDTOReq';

@Component({
  selector: 'app-batch-detail',
  imports: [
    DatePipe,
    CurrencyPipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './batch-detail.component.html',
  standalone: true,
  styleUrl: './batch-detail.component.css'
})
export class BatchDetailComponent {

  batch:RiceBatchDTOCompleto|null = null;

  batchInModifica:RiceBatchDTOReq|null = null;

  inModifica:boolean = false;

  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {
    route.paramMap.subscribe(
      parametri => {
        const id = parametri.get('id');
        if (id && !isNaN(+id))
          httpService.getOneRiceBatch(parseInt(id)).subscribe(
            res=> this.batch=res
          )
      }
    )
  }

  mettiInModifica(){
    this.inModifica = true;
    this.batchInModifica = {
      variety:this.batch!.variety,
      weight:this.batch!.weight,
      pricePerKg:this.batch!.pricePerKg,
      customerName:this.batch!.customerName
    };
  }


  annullaModifica() {
    this.inModifica = false;
  }

  salva()
  {
    this.httpService.modifyRiceBatch(this.batch!.id,this.batchInModifica!).subscribe(
      res=>
      {
        this.inModifica =false;
        this.batch=res;
      }
    )
  }
}
