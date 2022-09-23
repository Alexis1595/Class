package com.bootcamp;

public class cocheMain {

    public static void main(String[] args) {
        String coche = "Alfa Romeo";
        Coche cocheobj = new Coche();

        Coche cocheobj2 = new Coche("rojo","honda", "civic", "1430,45", "5,4");

        cocheobj2.acelerar(50);

        System.out.println(cocheobj2);

        // A partir de aquí se pueden ir modificando los atributos de la clase coche

        cocheobj2.color = "azul";

        System.out.println(cocheobj2);

        cocheobj2.fabricante = "Mercedes";

        System.out.println(cocheobj2);

        cocheobj2.modelo = "clase a";

        System.out.println(cocheobj2);

        cocheobj2.peso = "1450,5";

        System.out.println(cocheobj2);

        cocheobj2.velocidad = 80;

        System.out.println(cocheobj2);
    }
}
