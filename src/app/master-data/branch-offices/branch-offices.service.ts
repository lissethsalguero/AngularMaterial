import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { BranchOfficeDto } from "./branch-office.models";

@Injectable({
  providedIn: 'root'
})
export class BranchOfficesService {

  constructor(private _http: HttpClient) { }

  getAll(): Promise<BranchOfficeDto[]> {
    return this._http.get<BranchOfficeDto[]>(`${environment.api}/branch-office`).toPromise();
  }

  post(data: BranchOfficeDto){
    return this._http.post(`${environment.api}/branch-office`, data).toPromise();
  }

}
