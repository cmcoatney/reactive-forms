import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    const phone = this.fb.group({ area: [], prefix: [], line: [] });

    this.myForm = this.fb.group({
      email: [''],
      homePhone: phone,
      cellPhone: phone,
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
}
