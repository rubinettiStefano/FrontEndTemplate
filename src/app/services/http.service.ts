import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RiceBatchDTORidotto} from '../model/RiceBatchDTORidotto';
import {RiceBatchDTOCompleto} from '../model/RiceBatchDTOCompleto';
import {RiceBatchDTOReq} from '../model/RiceBatchDTOReq';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getAllRiceBatch(): Observable<RiceBatchDTORidotto[]> {
    return this.http.get<RiceBatchDTORidotto[]>("/api/batch");
  }

  getOneRiceBatch(id: number): Observable<RiceBatchDTOCompleto>
  {
    return this.http.get<RiceBatchDTOCompleto>("/api/batch/"+id);
  }

  insertRiceBatch(dto:RiceBatchDTOReq): Observable<RiceBatchDTOCompleto>
  {
    return this.http.post<RiceBatchDTOCompleto>("/api/batch",dto);
  }

  modifyRiceBatch(id:number,dto:RiceBatchDTOReq): Observable<RiceBatchDTOCompleto>
  {
    return this.http.put<RiceBatchDTOCompleto>("/api/batch/"+id,dto);
  }

  deleteRiceBatch(id:number): Observable<number>
  {
    return this.http.delete<number>("/api/batch/"+id);
  }
}
