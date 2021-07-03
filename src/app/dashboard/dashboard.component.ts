import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Question, Reponse } from '../question';
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
  nbrPoint = 0;
  qstTrouvee=0

  constructor(private heroService: HeroService, private questionService: QuestionService,) {
    this.questions=QUESTIONS
   }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));      
  }

  ngOnInit(): void {
    this.getHeroes();
    this.suivant();    
  }

  jouer(current=0): Question{
    return this.questions[current]
  }

  suivant(currentQuest=0){
    this.questionCurrent=this.questionService.jouer(this.pageCurrent);
    this.pageCurrent++;
  }
  precedent(currentQuest=0){
    this.pageCurrent--;
    this.questionCurrent=this.jouer(this.pageCurrent-1);
  }

  check(qstId: number, reponse: Reponse){
    
    const quest = this.questions.find(
      (qst: Question) => qst.id==qstId
    )

    if(quest){
      quest.reponse.find(
        (rep: Reponse) => {
          if(rep.id==reponse.id){
            if (quest.type=='radio') {
              quest.reponse.forEach(
                (rep) => rep.checked=false
              )
            }
            reponse.checked=!reponse.checked
          }
        }
      )
    }
  }

  async terminer(){
    this.questions.forEach(
      (quest: Question)=>{
        quest.reponse.forEach(
          (rep)=>{
              if ((rep.checked==true) && (rep.valeur==true)) {
              this.nbrPoint=this.nbrPoint+quest.point
              this.qstTrouvee+=1
              this.questions.splice(this.questions.indexOf(quest), 1)
            }
          }
        )
      }
    )
    this.pageCurrent=0
    if (this.questions.length!=0) {
      this.suivant()
    }
  }

  reloadCurrentPage() {
    window.location.reload();
   }
}
