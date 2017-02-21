public class Kata {

  public int min(int[] list) {
    int minimum = list[0];
    for (int i = 0;i<list.length;i++){
      if(list[i] < minimum) minimum = list[i];
    }
    return minimum;
  }

  public int max(int[] list) {
    int maximum = list[0];
    for (int i=0;i<list.length;i++){
      if (list[i] > maximum) maximum = list[i]; 
    }
    return maximum;
  }
}


//top rated
import java.util.Arrays;

public class Kata {

  public int min(int[] list) {
    return Arrays.stream(list).min().getAsInt();
  }
  
  public int max(int[] list) {
    return Arrays.stream(list).max().getAsInt();
  }
}
