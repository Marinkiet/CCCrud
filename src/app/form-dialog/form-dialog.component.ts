import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
  VaccinationStatus !: ['Yes','No'];
  covidForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormDialogComponent>,
  ) { }
  ngOnInit(): void {
    this.covidForm = this.formBuilder.group({
      vstatus: ['', Validators.required],
      recentCough: ['', Validators.required],
      difficultyBreathing: ['', Validators.required],
      lossOfTaste: ['', Validators.required],
      heavyHeadache: ['', Validators.required],
    });

}
}
