/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.members = [];
  }

  add(person) {
    this.members.push(person);
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.members.length; i++) {
      yield this.members[i];
    }
  }
}
