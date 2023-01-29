import { Component, Input, OnInit } from '@angular/core';
import { QuestionTemplate } from '../../Models/question-template';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }
  @Input() question : QuestionTemplate;
  @Input() form : FormGroup;

  ngOnInit(): void {
    
  }

}
