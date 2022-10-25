{
    init: function(elevators, floors) {
        elevators.forEach(elevator => {
            elevator.on("idle", function() {
                elevator.goToFloor(0);
            });
            elevator.on("floor_button_pressed", function(floorNum) {
                if(elevator.loadFactor() > 0.5) {
                    elevator.goToFloor(floorNum);
                } else {
                    setTimeout(() => {
                        elevator.goToFloor(floorNum);
                    }, 500);
                }
            });
        });
        floors.forEach(floor => {
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
