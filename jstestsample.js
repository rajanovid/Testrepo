let x=5;
//oru line add panalam 
//creating conflict
let y=6;
//creating conflict
y=3;
//ithuo onna add panuvom 
//epdi work agum 
console.log(y);

var raja=4;
//worka gathu
var raja="arun";
raja=0;

console.log(raja);
//"trying the code"
console.log(typeof raja);
let rr=113;
console.log(rr);

let rajan=function(a,b){
    return(a/b);
}
console.log(rajan(20,10));

function green(a,b){
return(a+b);
}

console.log(green(10,20));

let anbu=()=>{console.log("anbu");
}
anbu();
var anba=(a,b)=>a+b;
console.log(anba(10,5));

// let m=(a,b,c,d)=>{
// for(let i=a; i<=b; i++){

    
// if(i%2===0){
//     console.log(i+" its even number "+c);
    
// }
// else{
//     console.log(i+" its odd number "+ d);
    
// }

// }
// }
// m(0,20,"it shoud be even number"," it should be odd number");


// for(let i=5;i>=0;i--){
//     let val="";
    
//     for(let j=1; j<=i;j++){
//         val+="*";
           
//     }
//     console.log(val); 

    
// }

for(let i=1;i<=10;i++){
    let val="";
    for(let j=1; j<=10-i;j++){
        val+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        val+="*";
    }
    console.log(val);    
}








