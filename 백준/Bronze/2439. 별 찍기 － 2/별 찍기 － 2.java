
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scr = new Scanner(System.in);
        int N = scr.nextInt();
        for(int i = N; i > 0; i--){//5 4 3 2 1
            for(int j = 1; j <= N; j++){// 1 2 3 4 5
                if(j>=i) System.out.print("*");
                else System.out.print(" ");
            }
            System.out.println();
        }
    }
}

