let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let car in statistics){
    x = statistics[car];
    if (x%2!=0 || car[0]=='r'){
        console.log(x);
    }
}
