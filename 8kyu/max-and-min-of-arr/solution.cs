public class Kata
{
		public int Min(int[] list) {
        int min = list[0];
        for (int i=0;i<list.Length;i++)
        {
            if (list[i] < min) min = list[i];
        }
        return min;
		}
  
		public int Max(int[] list){
				int max = list[0];
        for (int j=0;j<list.Length;j++)
        {
            if (list[j] > max) max = list[j];
        }
        return max;
		} 
}
