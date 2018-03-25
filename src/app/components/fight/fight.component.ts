import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameControllerService } from './../../services/game-controller.service';
import {
  Hero,
  Monster,
  BaseCharacter,
  FightOptions,
  Warrior,
  Ranger,
  Rouge,
  Priest
} from '../../models/characters';

enum Teams {
  heroes,
  enemies,
  none
}

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  // heroParty;
  // enemyParty;
  // displayMessage;
  // successMessages;
  // selectedAction;
  // _fightOptions;
  // showNextChapterButton = false;
  // showGameOverButton = false;
  constructor(
    private gameControllerService: GameControllerService,
    private router: Router
  ) {}

  heroTurn = true;
  actionDelay: number = this.gameControllerService.actionDeley;
  turnsBetweenSpecial = 2;
  characterIndex = 0;
  freezeActions = false;

  heroParty: Hero[] = this.gameControllerService.heroParty;
  heroesIncapacitated = 0;
  enemyParty: Monster[] = this.gameControllerService.enemyParty;
  enemiesIncapacitated = 0;

  currentCharacter: BaseCharacter = this.heroParty[this.characterIndex];
  _fightOptions: typeof FightOptions = FightOptions;
  _teams: typeof Teams = Teams;
  selectedAction: FightOptions = FightOptions.none;
  availableTargets: Teams = Teams.none;
  selectedTargets: BaseCharacter[] = [];

  displayMessage = `${this.currentCharacter.name} - twoja kolej`;
  successMessages: string[] = [];
  showNextChapterButton = false;
  showGameOverButton = false;

  ngOnInit() {}

  selectOption(selectedOption: FightOptions) {
    console.log('select option: ', selectedOption);
    if (this.freezeActions && this.heroTurn) {
      return;
    }

    this.selectedAction = selectedOption;
    this.selectedTargets = [];

    if (this.selectedAction === FightOptions.attack) {
      this.availableTargets = Teams.enemies;
      this.displayMessage = 'Wybierz cel twojego ataku';
    } else if (
      this.selectedAction === FightOptions.specialAttack &&
      this.currentCharacter instanceof Hero &&
      this.currentCharacter.level < 3
    ) {
      this.displayMessage =
        'Specjalne ataki odblokowują postać po ich wykonaniu';
    } else if (
      this.selectedAction === FightOptions.specialAttack &&
      this.currentCharacter instanceof Hero &&
      this.currentCharacter.level > 2
    ) {
      if (this.currentCharacter.turnsUntilSpecialAvailableAgain) {
        this.displayMessage = `Nie mozesz uzyc jeszecze specjalnego ataku. ${
          this.currentCharacter.turnsUntilSpecialAvailableAgain
        } turns until it is av...`;
      } else {
        if (this.currentCharacter instanceof Warrior) {
          this.availableTargets = Teams.enemies;
          this.displayMessage = `Atak dwoch celow jednoczenie ...`;
        }
        if (this.currentCharacter instanceof Ranger) {
          this.availableTargets = Teams.heroes;
          this.displayMessage = `Ustaw trap to ptotect one of your bohater ...`;
        }
        if (this.currentCharacter instanceof Rouge) {
          this.availableTargets = Teams.enemies;
          this.displayMessage = `Trucizna ...`;
        }
        if (this.currentCharacter instanceof Priest) {
          this.availableTargets = Teams.heroes;
          this.displayMessage = `Wybrajafdsljhl ...`;
        }
      }
    }
  }

  tryAttack(target: BaseCharacter) {
    console.log('try Attack');
    console.log(target);

    if (this.freezeActions) {
      return;
    }
    if (target.isIncapacitated) {
      this.displayMessage = 'That target is already incapacitated.';
      return;
    }

    if (this.currentCharacter instanceof Monster && target instanceof Hero) {
      if (target.hasTrapDefence) {
        this.currentCharacter.isTrapped = true;

        if (target.hasDamagingTrap) {
          const damage = Math.floor(Math.random() * 8) + 1;
          this.currentCharacter.currentHealth -= damage;
          this.displayMessage = ` ${target.name} was protected by a trap. ${
            this.currentCharacter.name
          } is stuck in the trap, taking ${damage} damage. `;
          if (this.currentCharacter.currentHealth <= 0) {
            this.currentCharacter.isIncapacitated = true;
            this.enemiesIncapacitated++;
          }
        } else {
          this.displayMessage = ` ${target.name} was protected by trap. ${
            this.currentCharacter.name
          } is stuck in the trap. `;
        }

        target.hasTrapDefence = false;
        target.hasDamagingTrap = false;
        setTimeout(
          function() {
            this.checkIfWin();
          }.bind(this),
          this.actionDelay
        );
        return;
      }
    }

    if (this.selectedAction === FightOptions.attack) {
      this.freezeActions = true;
      this.attack(target);
    } else if (
      this.currentCharacter instanceof Hero &&
      this.currentCharacter.level > 2 &&
      this.selectedAction === FightOptions.specialAttack
    ) {
      const upgraded: boolean = this.currentCharacter.level > 5;

      if (this.currentCharacter instanceof Warrior) {
        this.warriorSpecialAttack(target, upgraded);
      }
      if (this.currentCharacter instanceof Ranger) {
        this.rangerSpecialAttack(target, upgraded);
      }
      if (this.currentCharacter instanceof Rouge) {
        this.rougeSpecialAttack(target, upgraded);
      }
      if (this.currentCharacter instanceof Priest) {
        this.priestSpecialAttack(target, upgraded);
      }
    } else {
      this.displayMessage = 'Please select an action option.';
    }
  }

  warriorSpecialAttack(target: BaseCharacter, upgraded: boolean) {
    if (!(target instanceof Monster)) {
      this.displayMessage = `Only enemies can be targeted for a warrior special`;
      return;
    }
    this.selectedTargets.push(target);
    if (this.selectedTargets.length < 2) {
      this.displayMessage = `Select a second target for uour warrior;s special attack`;
    } else if (this.currentCharacter instanceof Hero) {
      this.freezeActions = true;
      this.currentCharacter.turnsUntilSpecialAvailableAgain = this.turnsBetweenSpecial;
      const doubleAttackPenalty = upgraded ? 0 : 4;
      const firstTarget: BaseCharacter = this.selectedTargets[0];
      const secondTarget: BaseCharacter = this.selectedTargets[1];

      if (
        this.currentCharacter.attack() - doubleAttackPenalty >=
        firstTarget.barriers.attack
      ) {
        const damage = this.currentCharacter.dealDamage();
        firstTarget.currentHealth -= damage;
        this.displayMessage = ` ${this.currentCharacter.name} hit ${
          firstTarget.name
        } dealing ${damage} damage. `;
        if (firstTarget.currentHealth <= 0) {
          firstTarget.isIncapacitated = true;
          this.enemiesIncapacitated++;
        }
      } else {
        this.displayMessage = ` ${this.currentCharacter.name} Missed. `;
      }

      setTimeout(() => {
        this.displayMessage = ` ${this.currentCharacter.name} missed.`;
        if (secondTarget.currentHealth <= 0) {
          const damage = this.currentCharacter.dealDamage();
          secondTarget.currentHealth -= damage;
          this.displayMessage = ` ${this.currentCharacter.name} hit ${
            secondTarget.name
          } dealing ${damage} damage. `;
          if (
            secondTarget.currentHealth <= 0 &&
            !secondTarget.isIncapacitated
          ) {
            secondTarget.isIncapacitated = true;
            this.enemiesIncapacitated++;
          }
        } else {
          this.displayMessage = ` ${this.currentCharacter.name} Missed. `;
        }

        setTimeout(() => {
          this.selectedTargets = [];
          this.checkIfWin();
        }, this.actionDelay);
      }, this.actionDelay);
    }
  }

  rangerSpecialAttack(target: BaseCharacter, upgraded: boolean) {
    if (!(target instanceof Hero)) {
      this.displayMessage = `Onsly a hero can be targeted for a rangers special attack`;
      return;
    }
    if (target.hasTrapDefence) {
      this.displayMessage = `Target hero already has a trap degfense in place`;
      return;
    }
    this.freezeActions = true;
    if (this.currentCharacter instanceof Hero) {
      this.currentCharacter.turnsUntilSpecialAvailableAgain =
        this.turnsBetweenSpecial - 1;
    }

    this.displayMessage = ` ${
      this.currentCharacter.name
    } set up a trap to protect ${target.name} `;
    target.hasTrapDefence = true;
    target.hasDamagingTrap = upgraded;
    setTimeout(() => {
      this.nextTurn();
    }, this.actionDelay);
  }

  rougeSpecialAttack(target: BaseCharacter, upgraded: boolean) {
    if (!(target instanceof Hero)) {
      this.displayMessage = `Onsly a hero can be targeted for a rangers special attack`;
      return;
    }
    if (target.hasTrapDefence) {
      this.displayMessage = `Target hero already has a trap degfense in place`;
      return;
    }
    this.freezeActions = true;
    if (this.currentCharacter instanceof Hero) {
      this.currentCharacter.turnsUntilSpecialAvailableAgain =
        this.turnsBetweenSpecial - 1;
    }

    this.displayMessage = ` ${
      this.currentCharacter.name
    } set up a trap to protect ${target.name} `;
    target.hasTrapDefence = true;
    target.hasDamagingTrap = upgraded;
    setTimeout(() => {
      this.nextTurn();
    }, this.actionDelay);
  }

  priestSpecialAttack(target: BaseCharacter, upgraded: boolean) {
    if (!(target instanceof Hero)) {
      this.displayMessage = `Onsly a hero can be targeted for a rangers special attack`;
      return;
    }
    if (target.hasTrapDefence) {
      this.displayMessage = `Target hero already has a trap degfense in place`;
      return;
    }
    this.freezeActions = true;
    if (this.currentCharacter instanceof Hero) {
      this.currentCharacter.turnsUntilSpecialAvailableAgain =
        this.turnsBetweenSpecial - 1;
    }

    this.displayMessage = ` ${
      this.currentCharacter.name
    } set up a trap to protect ${target.name} `;
    target.hasTrapDefence = true;
    target.hasDamagingTrap = upgraded;
    setTimeout(() => {
      this.nextTurn();
    }, this.actionDelay);
  }

  attack(target: BaseCharacter) {
    this.availableTargets = Teams.none;
    if (this.currentCharacter.attack() >= target.barriers.attack) {
      const damage = this.currentCharacter.dealDamage();
      target.currentHealth -= damage;
      this.displayMessage = ` ${this.currentCharacter.name} uderzyl ${
        target.name
      } dealing  ${damage} damages. `;
      setTimeout(() => {
        if (target.currentHealth <= 0) {
          target.isIncapacitated = true;
          this.heroTurn
            ? this.enemiesIncapacitated++
            : this.heroesIncapacitated++;
          this.checkIfWin();
        } else {
          this.nextTurn();
        }
      }, this.actionDelay);
    } else {
      this.displayMessage = ` ${this.currentCharacter.name} Missed. `;
      setTimeout(() => {
        this.nextTurn();
      }, this.actionDelay);
    }
  }

  checkIfWin() {
    this.selectedAction = FightOptions.none;
    if (this.enemiesIncapacitated === this.enemyParty.length) {
      this.displayMessage = `All enemies have been; defeated!`;
      this.successMessages = this.gameControllerService.encounterSuccess();
      this.showNextChapterButton = true;
      this.gameControllerService.isFighting = false;
      return;
    }

    if (this.heroesIncapacitated === this.heroParty.length) {
      this.displayMessage = 'All heroes have been defeated!';
      this.showGameOverButton = true;
      this.gameControllerService.isFighting = false;
      return;
    }
    this.nextTurn();
  }

  nextTurn() {
    if (
      this.currentCharacter instanceof Monster &&
      this.currentCharacter.poisonStacks &&
      !this.currentCharacter.hasTakenPoisonDamageThisTurn
    ) {
      this.currentCharacter.hasTakenPoisonDamageThisTurn = true;
      const maxDamage = this.currentCharacter.isStrongPoison ? 6 : 3;
      const poisonDamage =
        (Math.floor(Math.random() * maxDamage) + 1) *
        this.currentCharacter.maxHealth;
      this.currentCharacter.currentHealth -= poisonDamage;
      this.displayMessage = ` ${
        this.currentCharacter.name
      } took ${poisonDamage} poison `;
      if (this.currentCharacter.currentHealth <= 0) {
        this.currentCharacter.isIncapacitated = true;
        this.enemiesIncapacitated++;
      }
      setTimeout(
        function() {
          this.checkIfWin();
        }.bind(this),
        this.actionDelay
      );
      return;
    }
    if (
      this.currentCharacter instanceof Monster &&
      this.currentCharacter.hasTakenPoisonDamageThisTurn
    ) {
    }

    this.availableTargets = Teams.none;
    this.selectedAction = FightOptions.none;
    this.characterIndex++;
    let nextCharacter;

    if (this.heroTurn) {
      nextCharacter = this.heroParty[this.characterIndex];
    } else {
      nextCharacter = this.enemyParty[this.characterIndex];
    }

    if (nextCharacter) {
      if (!nextCharacter.isIncapacitated) {
        this.currentCharacter = nextCharacter;
        this.displayMessage = ` It's ${this.currentCharacter.name}'s turn.`;
        if (this.currentCharacter instanceof Hero) {
          this.freezeActions = false;
          if (this.currentCharacter.turnsUntilSpecialAvailableAgain) {
            this.currentCharacter.turnsUntilSpecialAvailableAgain--;
          }
        } else {
          setTimeout(() => {
            this.takeEnemyTurn();
          }, this.actionDelay);
        }
      } else {
        this.nextTurn();
      }
    } else {
      this.heroTurn = !this.heroTurn;
      this.characterIndex = -1;
      this.nextTurn();
    }
  }

  takeEnemyTurn() {
    if (
      this.currentCharacter instanceof Monster &&
      this.currentCharacter.isTrapped
    ) {
    } else {
      let target: Hero;
      this.selectedAction = FightOptions.attack;

      while (!target) {
        const randomTargetIndex = Math.floor(
          Math.random() * this.heroParty.length
        );
        const potentialTarget = this.heroParty[randomTargetIndex];
        if (!potentialTarget.isIncapacitated) {
          target = potentialTarget;
        }
      }
      this.displayMessage = ` ${this.currentCharacter.name} atakuje ${
        target.name
      } .`;
      setTimeout(() => {
        this.tryAttack(target);
      }, this.actionDelay);
    }
  }

  nextChapter() {
    console.log('Next Chapter');
    this.gameControllerService.nextChapter();
    this.router.navigateByUrl('/story');
  }
  gameOver() {
    console.log('Game Over');
    this.gameControllerService.gameOver();
  }
}
