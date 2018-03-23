import {
  ClassOptions,
  RaceOptions,
  GenderOptions,
  CharacterOptions
} from './../models/character-options';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Hero,
  Armor,
  Weapon,
  Monster,
  Ranger,
  Rouge,
  Priest,
  Warrior,
  checkRace,
  ExperienceToLevel
} from './../models/characters';
import { Chapter, SuccessOptions } from './../models/chapter';
import { Chapter1 } from '../chapters/Chapter1';

@Injectable()
export class GameControllerService {
  constructor(private router: Router) {}

  mainCharacter: Hero;
  currentChapter: Chapter = Chapter1;
  isFighting = false;

  actionDeley = 1500;

  heroParty: Hero[] = [];
  partyInventory: (Weapon | Armor)[] = [];
  availableHeros: Hero[] = [];
  enemyParty: Monster[] = this.currentChapter.enemyParty;

  setMainCharacter(character: {
    name: string;
    class: ClassOptions;
    race: RaceOptions;
    gender: GenderOptions;
  }) {
    switch (character.class) {
      case ClassOptions.warrior:
        this.mainCharacter = new Warrior(
          character.name,
          character.gender,
          character.race,
          1,
          10,
          { attack: 0, sneak: 0, persuade: 0, intelligence: 0 },
          new Weapon('Knife', 1, 3),
          new Armor('Clothes', 0)
        );
        break;
      case ClassOptions.ranger:
        this.mainCharacter = new Ranger(
          character.name,
          character.gender,
          character.race,
          1,
          10,
          { attack: 0, sneak: 0, persuade: 0, intelligence: 0 },
          new Weapon('Knife', 1, 3),
          new Armor('Clothes', 0)
        );
        break;
      case ClassOptions.rogue:
        this.mainCharacter = new Rouge(
          character.name,
          character.gender,
          character.race,
          1,
          10,
          { attack: 0, sneak: 0, persuade: 0, intelligence: 0 },
          new Weapon('Knife', 1, 3),
          new Armor('Clothes', 0)
        );
        break;
      case ClassOptions.priest:
        this.mainCharacter = new Priest(
          character.name,
          character.gender,
          character.race,
          1,
          10,
          { attack: 0, sneak: 0, persuade: 0, intelligence: 0 },
          new Weapon('Knife', 1, 3),
          new Armor('Clothes', 0)
        );
        break;
    }

    checkRace(this.mainCharacter);
    this.heroParty.push(this.mainCharacter);
    this.router.navigateByUrl('/story');
  }
  encounterSuccess(): string[] {
    const messages: string[] = [];

    this.currentChapter.ifSucceed.forEach(reward => {
      switch (reward) {
        case SuccessOptions.rewardExperience:
          messages.push(
            `Each mmember z towiego party otrzymalo ${
              this.currentChapter.rewards.experience
            } doswiadczenia.`
          );
          this.heroParty.forEach(hero => {
            hero.experience += this.currentChapter.rewards.experience;
            if (hero.experience >= ExperienceToLevel[hero.level]) {
              messages.push(
                ` ${
                  hero.name
                }  podnosi level! Uprade their stats on the inventory screen.`
              );
              hero.levelUp();
            }
          });
          break;
        case SuccessOptions.rewardEquipment:
          messages.push('You received the following equipment: ');
          this.currentChapter.rewards.equipment.forEach(equipment => {
            if (equipment instanceof Armor) {
              messages.push(
                ` ${equipment.name} -- Attack Barrier Bonus: ${
                  equipment.attackBarrierBonus
                } `
              );
            } else {
              messages.push(
                ` ${equipment.name} -- Min Damage: ${
                  equipment.minDamage
                },  -- Max Damage: ${equipment.maxDamage} `
              );
            }

            this.partyInventory.push(equipment);
          });
          break;
        case SuccessOptions.addHeroToParty:
          const newHero: Hero = this.currentChapter.rewards.newHero;
          if (this.heroParty.length < 3) {
            messages.push(
              `A new hero joined your party! ${newHero.name} - ${
                newHero.characterRole
              } - lvl ${newHero.level} `
            );
            this.heroParty.push(newHero);
          } else {
            messages.push(
              `A new hero is available to join your party! ${newHero.name} - ${
                newHero.characterRole
              } - lvl ${newHero.level} `
            );
            this.availableHeros.push(newHero);
          }
          break;
      }
    });

    return messages;
  }

  nextChapter(): void {
    this.heroParty.forEach(hero => hero.rest());
    this.currentChapter = this.currentChapter.nextChapter;
    this.enemyParty = this.currentChapter.enemyParty;
  }

  gameOver(): void {
    this.mainCharacter = undefined;
    this.currentChapter = Chapter1;
    this.heroParty = [];
    this.partyInventory = [];
    this.availableHeros = [];
    this.enemyParty = this.currentChapter.enemyParty;

    this.router.navigateByUrl('/');
  }
}