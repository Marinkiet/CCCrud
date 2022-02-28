import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'CovidCompliancePrototype';
  constructor(private dialog: MatDialog) {

  }
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(FormDialogComponent, {
      width: '30%'
    });
  }
}
