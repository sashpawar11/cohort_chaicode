Object.prototype.print = function () {
    console.log("Function called");
}


const teas = {
    name: "Tea",
    type : "Hot"
}

teas.print();

const newTeas = ["Green Tea", "Lemon Tea", "IceTea"];
newTeas.print();