import data from './mock/data';


(function task10() {
    for (let i = 0; i < data.length; i++) {
        for (const prop in data[i]) {
            console.log(`${prop} = ${data[i][prop]}`);
        }
        console.log("\n===============")
    }
})();

(function task11() {
    for (const yoohoo in data) {
        for (const prop in data[yoohoo]) {
            console.log(`${prop} = ${data[yoohoo][prop]}`);
        }
        console.log("\n===============")
    }
})();

(function task12() {
    data.forEach(function(item) {
        Object.keys(item).forEach(function (key) {
            console.log(key, " = ", item[key]);
        });
        console.log("\n===============")
    })
})();

(function task13() {
    data.map(function(animal) {
        Object.keys(animal).map(function (key) {
            console.log(key, " == ", animal[key]); //просто чтоб отличать))
        });
        console.log("\n===============")
    })
})();
