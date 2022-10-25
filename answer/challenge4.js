{
    init: function(elevators, floors) {
        elevators.forEach(elevator => {
            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum);
            });
        });
        floors.forEach(floor => {
            floor.on("up_button_pressed", function(floorNum) {
                elevators[0].goToFloor(floor.floorNum());
            });
            floor.on("down_button_pressed", function(floorNum) {
                elevators[1].goToFloor(floor.floorNum());
            });
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
