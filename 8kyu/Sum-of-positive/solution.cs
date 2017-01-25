using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    int sum = 0;
    foreach (int element in arr)
    {
        if (element > 0) sum += element;
    }
    return sum;
  }
}

//top rated
using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    return arr.Where(x => x > 0).Sum();
  }
}
