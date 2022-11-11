//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NeflixShows {
  constructor(name, type, episodes, rating) {
    this.type = type;
    this.name = name;
    this.episodes = episodes;
    this.rating = rating;
  }
  play() {
    console.log(`${this.name} is playing!!!`);
  }
  stop() {
    console.log(`${this.name} has ended!`);
  }
  feedback() {
    console.log(`${this.name} is rated ${this.rating}`);
  }
}

const ozark = new NeflixShows('Ozark', 'drama', 10, 4.9);
ozark.play();
ozark.stop();
ozark.feedback();
