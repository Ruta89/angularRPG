import {
  RaceOptions,
  ClassOptions,
  GenderOptions
} from './../../models/character-options';
import { GameControllerService } from './../../services/game-controller.service';
import { Component, OnInit } from '@angular/core';
import { CharacterOptions } from '../../models/character-options';
@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {
  constructor(private gameControllerService: GameControllerService) {}

  character = {
    race: '--Wybierz--',
    class: '--Wybierz--',
    gender: undefined,
    name: undefined
  };

  characterComplete = false;

  races = CharacterOptions.races;
  classes = CharacterOptions.classes;
  gender = CharacterOptions.genders;

  ngOnInit() {}

  changeRace(race: string) {
    this.character.race = race;
    this.checkCompleted();
  }

  changeClass(newClass: string) {
    this.character.class = newClass;
    this.checkCompleted();
  }

  changeGender(gender: string) {
    this.character.gender = gender;
    this.checkCompleted();
  }

  changeName() {
    this.checkCompleted();
  }

  checkCompleted() {
    this.characterComplete =
      this.character.race !== '--Wybierz--' &&
      this.character.class !== '--Wybierz--' &&
      this.character.gender &&
      this.character.name;
  }

  createCharacter() {
    if (!this.characterComplete) {
      return;
    }

    this.gameControllerService.setMainCharacter(this.character);
  }
}
