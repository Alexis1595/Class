package com.bootcamp;

public class Coche {

    //atributos
    String color;
    String fabricante;
    String modelo;
    String peso;
    String largo;
    Integer velocidad = 0;

    //constructores
    public Coche(String color, String fabricante, String modelo, String peso, String largo) {
        this.color = color;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.peso = peso;
        this.largo = largo;

    }

    public Coche() {
        this.color = color;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.peso = peso;
        this.largo = largo;
    }

    //comportamiento del coche, al cual se les pueden sumar muchos mas, como por ejemplo consumo. 

    public void acelerar(Integer cantidad) {
        if (cantidad > 0 && cantidad <= 120) {
            this.velocidad += cantidad;
        }
      

    }

    @Override
    public String toString() {
        return "coche{" +
                "color='" + color + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", modelo='" + modelo + '\'' +
                ", peso='" + peso + '\'' +
                ", largo='" + largo + '\'' +
                ", velocidad=" + velocidad +
                '}';
    }
}
