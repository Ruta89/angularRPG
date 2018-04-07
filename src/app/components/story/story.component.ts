import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameControllerService } from './../../services/game-controller.service';

import {
  CharacterAction,
  SuccessOptions,
  FailureOptions
} from '../../models/chapter';
import { Hero, Monster } from '../../models/characters';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  constructor(
    private gameControllerService: GameControllerService,
    private router: Router
  ) {}

  currentChapter = this.gameControllerService.currentChapter;
  heroParty: Hero[] = this.gameControllerService.heroParty;
  enemyParty: Monster[] = this.gameControllerService.enemyParty;

  actionDelay: number = this.gameControllerService.actionDeley;
  displayMessage = '';
  successMessages: string[] = [];
  showNextChapterButton = false;

  ngOnInit() {}

  chooseAction(action: string): void {
    if (this.successMessages.length) {
      return;
    }

    this.displayMessage = `Zdecydowałes  ${action}.`;
    setTimeout(() => {
      switch (action) {
        case CharacterAction.attack:
          this.tryAttack();
          break;
        case CharacterAction.sneak:
          this.trySneak();
          break;
        case CharacterAction.persuade:
          this.tryPerduade();
          break;
        case CharacterAction.doNothing:
          this.doNothing();
          break;
        default:
          console.log('Cos poszlo nie tak w story component chooseAction');
      }
    }, this.actionDelay);
  }

  tryAttack(): void {
    this.gameControllerService.isFighting = true;
    this.router.navigateByUrl('/fight');
  }

  trySneak(): void {
    let sneakBarrier = 0;
    let sneakPower = 0;
    this.enemyParty.forEach(enemy => {
      sneakBarrier += enemy.barriers.sneak;
    });
    this.heroParty.forEach(hero => {
      sneakPower += hero.sneak();
    });
    if (sneakPower >= sneakBarrier) {
      console.log(`Twoja proba skradania zakonczyla sie sukcesem!`);
      this.displayMessage = `Twoja proba skradania zakonczyla sie sukcesem!`;
      setTimeout(() => {
        this.onSuccess();
      }, this.actionDelay);
    } else {
      console.log(`Twoja proba zakradniecia sie nie powiodla sie!`);
      this.displayMessage = `Twoja proba zakradniecia sie nie powiodla sie!`;
      setTimeout(() => {
        this.onSneakPersuadeFailure();
      }, this.actionDelay);
    }
  }

  tryPerduade(): void {
    let persuasionBarrier = 0;
    let persuasionPower = 0;
    this.enemyParty.forEach(enemy => {
      persuasionBarrier += enemy.barriers.persuade;
    });
    this.heroParty.forEach(hero => {
      persuasionPower += hero.persuade();
    });
    if (persuasionPower >= persuasionBarrier) {
      console.log(`Twoja proba namawiania zakonczyla sie sukcesem!`);
      this.displayMessage = `Twoja proba namawiania zakonczyla sie sukcesem!`;
      setTimeout(() => {
        this.onSuccess();
      }, this.actionDelay);
    } else {
      console.log(`Twoja proba namawiania   nie powiodla sie!`);
      this.displayMessage = `Twoja proba namawiania   nie powiodla sie!`;
      setTimeout(() => {
        this.onSneakPersuadeFailure();
      }, this.actionDelay);
    }
  }

  doNothing(): void {
    console.log(`Zdecydowales sie nic nie robic i isc`);
    this.displayMessage = `Zdecydowales sie nic nie robic i isc`;
    setTimeout(() => {
      this.nextChapter();
    }, this.actionDelay);
  }

  onSuccess(): void {
    this.successMessages = this.gameControllerService.encounterSuccess();
    this.showNextChapterButton = true;
  }

  onSneakPersuadeFailure(): void {
    switch (this.currentChapter.sneakPersuadeFail) {
      case CharacterAction.attack:
      default:
        console.log(`Wrog cie atakuje.`);
        this.displayMessage = `Wrog cie atakuje.`;
        setTimeout(() => {
          this.tryAttack();
        }, this.actionDelay);
        break;
      case CharacterAction.doNothing:
        console.log(`Twoj blad spowodowal twowieiofhsdhj`);
        this.displayMessage = `Twoj blad spowodowal twowieiofhsdhj`;
        setTimeout(() => {
          this.nextChapter();
        }, this.actionDelay);
        break;
    }
  }

  nextChapter(): void {
    this.gameControllerService.nextChapter();
    this.currentChapter = this.gameControllerService.currentChapter;
    this.heroParty = this.gameControllerService.heroParty;
    this.enemyParty = this.currentChapter.enemyParty;
    this.displayMessage = '';
    this.successMessages = [];
    this.showNextChapterButton = false;
  }
}
