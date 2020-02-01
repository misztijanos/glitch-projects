/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    let pronoun =
      this.gender === "male"
        ? "He likes"
        : this.gender === "female"
        ? "She likes"
        : "They like";
    let hobbyString = this.interests
      .map(function(currentValue, index) {
        return index === 0
          ? currentValue
          : //within the callback function, `this` refers to `this.interests`, because I'm using the thisValue parameter
          index !== this.length - 1
          ? ", " + currentValue
          : " and " + currentValue;
      }, this.interests)
      .join("");
    alert(
      this.name.first +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. " +
        pronoun +
        " " +
        hobbyString +
        "."
    );
  };
}

let person1 = new Person("Bobby", "Smith", 32, "female", [
  "music",
  "skiing",
  "weed"
]);
person1.bio();
Person.prototype.farewell = function() {
  alert(this.name.first + " has left the building. Bye!");
};
