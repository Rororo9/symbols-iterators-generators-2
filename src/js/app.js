const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const char_2 = {
  name: 'Маг',
  type: 'Mage',
  health: 40,
  level: 1,
  attack: 55,
  defence: 5,
};

class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}

const team = new Team();
team.addCharacter(char);
team.addCharacter(char_2);

for (const character of team) {
  console.log(character);
}
