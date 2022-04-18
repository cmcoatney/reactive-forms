import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Career {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  careers: Career[] = [
    { value: 'coder-0', viewValue: 'Developer' },
    { value: 'gamer-1', viewValue: 'Pro Gamer' },
    { value: 'theologian-2', viewValue: 'Theologian' },
  ];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: [''],
      message: [''],
      career: [''],
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
}
