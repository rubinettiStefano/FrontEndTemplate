import { Component } from '@angular/core';
import {RiceBatchDTOReq} from '../../../model/RiceBatchDTOReq';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-creazione-batch',
  imports: [
    FormsModule
  ],
  templateUrl: './form-creazione-batch.component.html',
  standalone: true,
  styleUrl: './form-creazione-batch.component.css'
})
export class FormCreazioneBatchComponent {

  batch: RiceBatchDTOReq = {
    variety: "",
    weight: 0,
    pricePerKg: 0,
    customerName: ""
  };

  constructor(private httpService: HttpService, private route: Router) {}

  salva() {
    this.httpService.insertRiceBatch(this.batch).subscribe
    (
      () => {
        this.route.navigate(["/batches"]);
      }
    );
  }
}
