package gcu.backend.gcurest;

public class Car {
    private Integer id;
    private String brand;
    private String company;
    private Integer Price;

    public Car(Integer id, String brand, String company, Integer price) {
        this.id = id;
        this.brand = brand;
        this.company = company;
        Price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Integer getPrice() {
        return Price;
    }

    public void setPrice(Integer price) {
        Price = price;
    }
}
