import { CharacterOptions } from './../models/character-options';
import {
  Chapter,
  CharacterAction,
  FailureOptions,
  SuccessOptions
} from '../models/chapter';
import { Weapon, Armor, Monster, Warrior } from '../models/characters';
import {
  GenderOptions,
  RaceOptions,
  ClassOptions
} from '../models/character-options';

export const Chapter1: Chapter = {
  story: [
    `klsjdgsdkljgsdkj sjkklj;lj gfskljlkjklsd s`,
    `klsjdgsdkljgsdkj sjkklj;lj gfskljlkjklsd s`
  ],
  options: [
    CharacterAction.attack,
    CharacterAction.sneak,
    CharacterAction.persuade
  ],
  enemyParty: [
    new Monster(
      'Goblin',
      5,
      { attack: 2, sneak: 0, persuade: 0 },
      { attack: 10, sneak: 10, persuade: 10 },
      1,
      3,
      '../../assets/goblin.jpg'
    )
  ],
  sneakPersuadeFail: CharacterAction.attack,
  ifFail: FailureOptions.nextChapter,
  ifSucceed: [
    SuccessOptions.rewardExperience,
    SuccessOptions.rewardEquipment,
    SuccessOptions.addHeroToParty
  ],
  rewards: {
    experience: 500,
    equipment: [new Weapon('Rusty Sword', 1, 6)],
    newHero: new Warrior(
      'Benjamin',
      GenderOptions.male,
      RaceOptions.elf,
      1,
      10,
      { attack: 2, sneak: 1, persuade: 1, intelligence: 1 },
      new Weapon('Dagger', 1, 4),
      new Armor('Clothes', 0)
    )
  },
  nextChapter: null
};
