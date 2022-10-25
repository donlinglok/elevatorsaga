{
    init: function(elevators, floors) {
        elevators.forEach(elevator => {
            elevator.on("idle", function() {
                //elevator.goToFloor(0);
            });
            elevator.on("floor_button_pressed", function(floorNum) {
                //if(elevator.loadFactor() > 0.7) {
                elevator.goToFloor(floorNum);
                //} else {
                //    setTimeout(() => {
                //        elevator.goToFloor(floorNum);
                //    }, 1000);
                //}
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
