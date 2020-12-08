package com.company;

import java.util.Scanner;

public class Console {
    public static double readNumber( String prompt, double min, double max ){
        Scanner scanner = new Scanner(System.in);
        double value;
        while (true){
            System.out.println(prompt);
            value = scanner.nextFloat();
            if (value >= min && value <= max)
                break;
            System.out.println("Enter a value between " + min +" to " + max);
        }
        return value;
    }
}
