 //array searching
 console.log("Array Searching : ");
 let arr=[1,2,3,4,5,6];
 console.log(arr.indexOf(3));

 console.log(arr.find(arr => arr<4));

 console.log(arr.includes(5));

 //array filtering
 console.log("Array Filtering : ");
 arr=[20,30,24,50,56,36,27,35,75,13,66,78];
 console.log(arr.filter(arr => arr >30));

 //array joining and splitting
 console.log("Array Joining : ");
 let str=['one','two','three'];
 console.log(str.join(' and '));

 console.log("Array Splitting : ")
 let str2="hi hello all! welcome";
 console.log(str2.split(" "));

 //array destructing
 console.log("Array Destructing : ")
 function test_result(m1,m2,m3,m4,m5){
     const total=m1+m2+m3+m4+m5;
     const avg=total/5;
     return [total,avg];
 }
 console.log(test_result(90,98,89,86,88));

 //array spreading 
 console.log("Array spreading : ");
 let arr2=[1,2,3,4];
 let arr3=[6,7,8];
 console.log([...arr2,...arr3]);

 //array flattening
 console.log("Array flattening : ");
 arr3=[1,2,3,[4,5,6,7,8,9],10,[11,12]];
 console.log(arr3.flat());

 //merge arrays
 console.log("Merge Arrays : ");
 arr=[2,3,4];
 arr1=[5,6,7,8];
 console.log(arr.concat(arr1));

 //creating new array with size
 console.log("creating new array with index values : ");
 let size=5;
 let arr4= new Array(size);
 console.log(arr4);

 //finding longest string in array
 console.log("longest string in an array : ");
 str=['ajay','kumar','welcome','akshay','raj','vimalraj'];
 let last=0;
 let lstring="";
 for(i=0;i<str.length;i++){
     let len=str[i].length;
     if(len>last){
         last=len;
         lstring=str[i];
     }
 }
 console.log(lstring);

 //generating array of a range
 console.log("printing array elements with the range : ");
 arr=[1,2,3,4,5,6,7,8];
 let arr5=[];
 for(i=1;i<6;i++){
     arr5.push(arr[i]);
 }
 console.log(arr5);