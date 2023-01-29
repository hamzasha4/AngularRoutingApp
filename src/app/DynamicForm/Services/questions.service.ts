import { Injectable } from '@angular/core';
import { QuestionTemplate } from '../Models/question-template';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private client:HttpClient) { }
  getQuestions(){
    return this.client
      .get('https://mocki.io/v1/1566e464-5950-442c-b2c8-258ebc6f84d9')
      .pipe(
        map((data: any) => {
          let questions: QuestionTemplate[] = [];
          data.forEach((element: QuestionTemplate) => {
            questions.push(element);
          });
          return questions;
        })
      );
  }
}
