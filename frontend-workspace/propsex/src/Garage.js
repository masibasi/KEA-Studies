function Car(props) {
    return (
        <p>
            [{props.num}] {props.brand} {props.price} {props.desc}
        </p>
    );
}
function Garage() {
    const carName = "Ford123";
    const carInfo = { name: "Ford", model: "Mustang" };
    const cars = [
        { id: 1, brand: "Ford", price: 4500, desc: "Graceful design" },
        { id: 2, brand: "BMW", price: 7800, desc: "Functional of high level" },
        { id: 3, brand: "Benz", price: 7800, desc: "Comfortable interior" },
        { id: 4, brand: "KIA", price: 5000, desc: "Clean shape" },
        { id: 5, brand: "Audi", price: 6700, desc: "Popular car" },
    ];
    return (
        <>
            <h1>Car List</h1>
            {cars.map((car) => (
                <Car
                    key={car.id}
                    num={car.id}
                    brand={car.brand}
                    price={car.price}
                    desc={car.desc}
                />
            ))}
        </>
    );
}
export default Garage;
