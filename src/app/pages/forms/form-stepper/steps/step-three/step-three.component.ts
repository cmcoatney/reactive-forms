import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Form array binding issues resolved with this gotcha
// https://dontpaniclabs.com/blog/post/2022/01/05/how-to-use-angular-formarrays-within-formgroups-in-reactive-forms/

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
})
export class StepThreeComponent {
  @Input() formGroup: FormGroup = new FormGroup({});

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.addControl('answers', this.fb.array([]));
  }

  get answers() {
    return this.formGroup.controls['answers'] as FormArray;
  }

  addAnswer() {
    const answerForm = this.fb.group({
      correct: [false],
      answer: ['', Validators.required],
    });

    this.answers.push(answerForm);
  }

  delete(idx: number) {
    this.answers.removeAt(idx);
  }
}
