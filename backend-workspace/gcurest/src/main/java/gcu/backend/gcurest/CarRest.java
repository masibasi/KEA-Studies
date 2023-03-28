package gcu.backend.gcurest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class CarRest {

    @GetMapping("/api/getcar")
    public Car get(){
        System.out.println("UserApicontroller start...");
        Car car = new Car(1, "Granduer", "Hyundai", 6000);

        return car;
    }
    @PostMapping("/api/cars")
    public Car user(){
        System.out.println("UserApiController start...");
        Car car = new Car(1, "Granduer", "Hyundai", 6000);

        return car;
    }

}
