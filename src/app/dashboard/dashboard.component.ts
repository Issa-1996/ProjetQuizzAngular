import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QUESTIONS } from '../mock-question';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  pageCurrent = 0;
  questionCurrent:Question;
  listAdmin: any[];
  questions:Question[];

  constructor(private heroService: HeroService, private questionService: QuestionService,) {
    this.questions=QUESTIONS
   }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
      console.log(this.heroes);
      
  }

  ngOnInit(): void {
    this.getHeroes();
    this.suivant();
    //this.precedent(this.pageCurrent);
    
  }

  suivant(currentQuest=0){
    this.questionCurrent=this.questionService.jouer(this.pageCurrent);
    console.log(this.questionCurrent);
    this.pageCurrent++;
  }
  precedent(currentQuest=0){
    this.pageCurrent--;
    this.questionCurrent=this.questionService.jouer(this.pageCurrent-1);
    console.log(this.questionCurrent);
  }
}
