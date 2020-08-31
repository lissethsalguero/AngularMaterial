import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BranchOfficesService } from '../branch-offices.service';
import { BranchOfficeDto } from '../branch-office.models';

@Component({
  selector: 'app-branch-office-form',
  templateUrl: './branch-office-form.component.html',
  styleUrls: ['./branch-office-form.component.scss']
})
export class BranchOfficeFormComponent implements OnInit {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private branchOfficeService: BranchOfficesService) {
    this.form = formBuilder.group({
      branchOfficeId: [0],
      description: ['', Validators.required],
      direction: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }


 async onSubmit(){
    let data = this.form.getRawValue() as BranchOfficeDto;
    await this.branchOfficeService.post(data);
  }

}
