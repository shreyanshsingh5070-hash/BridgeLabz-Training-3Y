const user = {
    name: "Shreyansh",
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

console.log("In an arrow function, this is taken from the surrounding scope, not from the user object.");
console.log("Therefore, this.name is undefined in this example.");

user.showName = function () {
    console.log("Normal function this.name:", this.name);
};

user.showName();
