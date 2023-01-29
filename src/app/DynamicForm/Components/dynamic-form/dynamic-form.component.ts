import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionTemplate } from '../../Models/question-template';
import { QuestionsService } from '../../Services/questions.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(private qs:QuestionsService) { }
  questions : QuestionTemplate[] = [];
  form! : FormGroup;
  formIOJson : string;
  ngOnInit(): void {
    this.getDynamicFormQuestions();
  } 
  getDynamicFormQuestions(){
    this.qs.getQuestions().subscribe((questions:QuestionTemplate[])=>{
      this.questions = questions;
      this.form = this.toFormGroup(questions);
      this.formIOJson = `{
        "title": "My Test Form",
        "components":${JSON.stringify(this.questions)}
      }` 
    })
  }
  toFormGroup(questions: QuestionTemplate[] ) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.validate?.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
  onSubmit(){
    console.log(this.form.value);
  }
}
