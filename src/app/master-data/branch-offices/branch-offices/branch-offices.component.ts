import { Component, OnInit } from '@angular/core';
import { BranchOfficesService } from '../branch-offices.service';
import { BranchOfficeDto } from '../branch-office.models';

@Component({
  selector: 'app-branch-offices',
  templateUrl: './branch-offices.component.html',
  styleUrls: ['./branch-offices.component.scss']
})
export class BranchOfficesComponent implements OnInit {
  data: BranchOfficeDto[] = [];
  constructor(private branchOfficesService: BranchOfficesService) { }

  ngOnInit(): void {
    this.load();
  }

  async load(){
    this.data = await this.branchOfficesService.getAll()  
  }

}
