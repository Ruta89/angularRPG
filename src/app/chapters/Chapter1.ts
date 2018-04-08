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
    `Wchodzisz do lasu, ścigając goblina, który ukradł miecz twojego ojca.
     Tracisz ich z oczu w gęstym lesie i zaczynasz skradać się do przodu, opierając się na uszach,
     aby ogrzać cię z niebezpieczeństw i, miejmy nadzieję, zlokalizować opiekuńczego goblina.`,

    `Pojawiają się Shenanigans i zaczyna się spotkanie. Teraz pytanie brzmi: jak chcesz sobie z tym poradzić?`
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
      './assets/goblin.png'
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
    equipment: [new Weapon('Zardzewiały miecz', 1, 6)], // Rusty sword
    newHero: new Warrior(
      'Benjamin',
      GenderOptions.male,
      RaceOptions.elf,
      1,
      10,
      { attack: 2, sneak: 1, persuade: 1, intelligence: 1 },
      new Weapon('Sztylet', 1, 4), // dagger
      new Armor('Ubrania', 0) // Clothes
    )
  },
  nextChapter: null
};
