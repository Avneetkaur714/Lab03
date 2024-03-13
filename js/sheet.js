document.getElementById("hamburgerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let bun = document.getElementById("bun").value;
    let meat = document.getElementById("meat").value;
    let patties = document.getElementById("patties").value;
    let toppings = document.getElementById("toppings").value.split(",").map(item => item.trim());
    let cheeseOption = document.getElementById("cheeseOption").value;
    let cheeses = cheeseOption === "Yes" ? ["Cheese"] : [];
    let sauces = Array.from(document.getElementById("sauces").selectedOptions).map(option => option.value);

    let hamburger = new Hamburger(bun, meat, patties, toppings, cheeses, sauces);
    document.getElementById("result").innerText = hamburger.describe();
});

function Hamburger(bun, meat, patties, toppings, cheeses, sauces) {
    this.bun = bun;
    this.meat = meat;
    this.patties = patties;
    this.toppings = toppings;
    this.cheeses = cheeses;
    this.sauces = sauces;

    this.describe = function() {
        let description = `Yummy ${this.meat} hamburger on a ${this.bun} bun`;
        if (this.patties !== "Single") {
            description += ` with ${this.patties.toLowerCase()} patties`;
        }
        if (this.toppings.length > 0) {
            description += ` topped with ${this.toppings.join(', ')}`;
        }
        if (this.cheeses.length > 0) {
            description += ` and ${this.cheeses.join(', ')} cheese`;
        }
        if (this.sauces.length > 0) {
            description += ` with ${this.sauces.join(', ')} sauce`;
        }
        return description + ".";
    };
}
