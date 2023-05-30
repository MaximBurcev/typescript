class Vehicle {
    run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

class LCV extends Vehicle {
    capacity: null;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({run: 1});


function logId<T extends string | number, Y>(id: T, additionData: Y): {id: T, data: Y} {
    console.log(id);
    console.log(additionData);
    return {id, data: additionData};
}