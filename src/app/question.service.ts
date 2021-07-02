import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-question';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  jouer(current=0): Question{
    return QUESTIONS[current]
  }
}
