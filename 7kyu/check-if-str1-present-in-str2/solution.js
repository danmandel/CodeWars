function letterCheck(arr) {

str1 = arr[0].split("");
str2 = arr[1].split("");

// for each element in str2, return the index of that element in str1
// -1 means that element does not exist in str1
// fails on repeat letters in str1, caps
indexList = str2.map(x => str1.indexOf(x));

for (i=0;i<indexList.length;i++){
    if (indexList[i] == -1){
        return false;
    } else {
        return true;
    }
};
}
