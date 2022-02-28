import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
  officerInput !: FormGroup;
  value = 'Temperature';
  constructor( ) { }

 
  ngOnInit(): void {

  }
}