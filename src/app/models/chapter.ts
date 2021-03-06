import { Hero, Monster, Weapon, Armor } from './characters';

export enum CharacterAction {
  attack = 'Atak',
  sneak = 'Skradanie',
  persuade = 'Namawianie',
  doNothing = 'Nic nie rob'
}

export enum FailureOptions {
  gameOver,
  nextChapter
}

export enum SuccessOptions {
  rewardExperience,
  rewardEquipment,
  addHeroToParty
}

export class Chapter {
  story: string[];
  options: CharacterAction[];
  enemyParty: Monster[];
  sneakPersuadeFail: CharacterAction;
  ifFail: FailureOptions;
  ifSucceed: SuccessOptions[];
  rewards: {
    experience: number;
    equipment: (Weapon | Armor)[];
    newHero: Hero;
  };
  nextChapter: Chapter;
}
