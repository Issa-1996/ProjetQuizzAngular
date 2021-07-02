import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  pageCurrent = 1;
  totalPage = 1;
  listAdmin: any[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

  ngOnInit(): void {
    this.getHeroes();
    this.listeAdmin(this.pageCurrent);
  }

  listeAdmin(page: number): any{
    this.pageCurrent = page;
    return this.heroService.getHeroes()
      .subscribe(
        data => {
          console.log(data);
          this.listAdmin = data;
          /*const totalPage = data['hydra:totalItems'] / 5;
          this.totalPage = (Math.ceil(totalPage));
          console.log(this.listAdmin);*/          
        }
      );
  }
}
