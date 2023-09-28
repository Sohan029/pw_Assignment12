let list=[1,"jai",2,3,"sohan","rakesh","ram","lakshay",100];

for(let i=0;i<list.length;i++){
    if(typeof list[i]== "string"){
        console.log("The found the first string and it's value is: ",list[i]);
        break;
    }
}