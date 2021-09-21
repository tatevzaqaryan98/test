




let data={
    user: undefined,
}

let data={
    user: null,
}

let data={
    user: 0,
}

let data={}

let data={
    user: (()=>{return null})()
}

if(data.user){
    console.log("hi")
}






/*let a=[5,40, 29, 44, 33],


function  transform(arr) {
    return arr
                .map((val)=>val+1)
                .filter((val)=>val%2===0);
}

alert(transform(a));
*/




























 /*const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "https://images7.alphacoders.com/837/837117.jpg";

const heroImg = document.createElement("img");
heroImg.src = "https://cdn.quotesgram.com/img/85/55/329025798-weeninja-2.png";

const starImg = document.createElement("img");
starImg.src = "https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png";


const audio = document.createElement("audio");
audio.src = "http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3";

let data = {
  hero: {
    xDelta: 0,
    yDelta: 0,
    x: 10,
    y: 140,
    width: 100,
    height: 100
  },
  bullets: []
};

function update() {
  data.hero.x += data.hero.xDelta;
  data.hero.y += data.hero.yDelta;

  data.bullets.forEach(function(bullet) {
    bullet.x += bullet.xDelta;
  });

  data.bullets = data.bullets.filter(function(bullet) {
    if (bullet.x > canvas.width) {
      return false;
    }
    return true;
  });
}

function draw() {
  context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

  context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height);

  data.bullets.forEach(function(bullet) {
    context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height);
  });

}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}

loop();

document.addEventListener("keydown", function(evt){
    if (evt.code==="Space"|| evt.code==="ArrowUp") {
        data.hero.x+=3;
        data.hero.y-=5;
    } 
        
    
});
document.addEventListener("keydown", function(evt) {
    if (evt.code==="ArrowDown") {
        data.hero.y+=3;
    }
  });

document.addEventListener("keydown", function(evt) {
  if (evt.code === "ArrowRight") {
    data.hero.xDelta = 1;
  } else if (evt.code === "ArrowLeft") {
    data.hero.xDelta = -1;
//   } else {
//     audio.currentTime = 0;
//     audio.play();
//     data.bullets.push({
//       xDelta: 5,
//       x: data.hero.x + data.hero.width,
//       y: data.hero.y + data.hero.height / 2,
//       width: 20,
//       height: 20
//     });
//   }
// });
// document.addEventListener("keyup", function(evt) {
//   data.hero.xDelta = 0;
// });



*/





































// /*const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// const bimg=document.createElement("img");
// bimg.src="https://images7.alphacoders.com/837/837117.jpg";

// const heroImg=document.createElement("img");
// heroImg.src="https://cdn.quotesgram.com/img/85/55/329025798-weeninja-2.png"




// let data={
//     hero:{
//         xDelta:0,
//         yDelta:0,
//         entryX:10,
//         entryY:140,
//         width:100,
//         height:100,
//         frame:heroImg,

//         },    
        
//     }


// function update(){
// //    console.warn(data.hero.frame)
// data.hero.entryX+=data.hero.xDelta
// data.hero.entryX  = data.hero.entryX<0?0:data.hero.entryX>canvas.width-data.hero.width?canvas.width-data.hero.width:data.hero.entryX
// // data.hero.xDelta=0



// };


// function draw(){
//     context.drawImage(bimg, 0, 0, canvas.width, canvas.height);
//     context.drawImage(heroImg, data.hero.entryX, data.hero.entryY, data.hero.width, data.hero.height);
//     data.hero.xDelta=0;
// }


// function loop(){
//     requestAnimationFrame(loop);
//     update();
//     draw();
// }

// loop();

// document.addEventListener("keydown", function(evt){
//     const val=evt.code;

//     switch(val){
//         case "Spase":
//             data.hero.yDelta-=10;
//     }
// })
// document.addEventListener("keydown", function(evt){
//  const val=evt.code
//     switch(val){
//       case "ArrowRight":
//           data.hero.xDelta=5;
//           break
//           case "ArrowLeft":
//           data.hero.xDelta = -5;
//           break
//   }
// });
// document.addEventListener("keyup", function(evt){
//     data.hero.xDelta=0;
// });*/
// /*
// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// let data = {
//   xDelta: 0,
//   x: 10,
//   y: 10,
//   width: 50,
//   height: 50
// };

// function update() {
//   data.x += data.xDelta;
// }

// function draw() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.fillRect(data.x, data.y, data.width, data.height);
// }

// function loop() {
//   requestAnimationFrame(loop);
  
//   update();
//   draw();
// }

// loop();

// document.addEventListener("keydown", function(evt) {
//   if(evt.code === "ArrowRight") {
//     data.xDelta = 5;
//   } else if(evt.code === "ArrowLeft") {
//     data.xDelta = -5;
//   }
  
// });

// document.addEventListener("keyup", function(evt) {
//   data.xDelta = 0;
// });
// */

















// /////////////
// /*let data={
//     x:10,
//     y:10,
//     width:50,
//     height:50,
//     fillstyle:"red"
// }



// const canvas=document.querySelector("canvas");
// const context=canvas.getContext("2d");


// let xDelta=10;
// let yDelta=10;

// function update(){
//     if(data.x+data.width>canvas.width|| data.x<0){
//         xDelta*=-1;
//     }
//     data.x+=xDelta;

//     if(data.y+data.height>canvas.height||data.y<0){
//         yDelta*=-1;
//     }
//     data.x+=xDelta;
//     data.y+=yDelta;
// }

// function drow(){
//     context.clearRect(0,0, canvas.width, canvas.height);
//     context.fillStyle=data.fillstyle;
//     context.fillRect(data.x, data.y, data.width, data.height);
// }


// function loop(){
//     requestAnimationFrame(loop);

//     update();
//     drow();
// }

// */loop();

// ///////////////////////////

// /*context.fillStyle="red";
// context.fillRect(10, 50, 50, 50);


// context.lineWidth=2; 
// context.strokeStyle="green";
// context.strokeRect(100, 50, 50, 50);
// */

//  //////////////////

// const label=document.querySelector("#label");

// const text=document.querySelector("#text");

// text.addEventListener("keyup", function(evt){
// label.innerHTML=evt.target.value;

// alert(text.value);
// });

// /////////////////////
// const box=document.querySelector("#elem");

// box.addEventListener("mouseenter", function(){
//     box.style.backgroundColor="green";
// });


// box.addEventListener("mouseleave", function(){
//     box.style.backgroundColor="red";
// });















// /*function sum(arr){
//     return arr.reduce(function(aggr, val){
//         if (Array.isArray(val)) {
//             return aggr+sum(val);
//         }

//         return aggr+val;
//     }, 0);
// }

// console.log(sum([4, 3, [8,2], [3,6, [9,12, 33], 6], 7, 8, 9]));

// */

















// /*function forEach(arr, func){
//     function loop(i){
//         if (i>=arr.length) {
//             return;
//         }
//         func(arr[i], i);
//         loop(i+1);
//     }
//     loop(0);
// }
//  */


// //////
// /*
// function pow(x, y){
//     if (y===0) {
//         return 1;
//     }
//     return x*pow(x, y-1);
// }

// console.log(pow(5,3)); //Math.pow(5,3)
// */

















// ////////

// /*function max(arr){
//     let max=arr[0];
//     for (let i= 0; i< arr.length; i++) {
//         const val = arr[i];
//         if (val>max) {
//             max=val;;
//         }
//     }
//     return max;
// } 
//  console.log(max([5, 100, 6, 288, 99, 60]));
// */




// //////////
// /*function max( arr){
//     return arr.reduce(function(arrg, val){
//         if (val>arrg) {
//             return val;
//         }
//         return arrg;
//     }, arr[0]);
// };

// console.log(max([5, 100, 288, 366, 22, 4] ));
// */






// //////

// /*let a={
//     name:"poghos",
//     phone:"93411216"
// };

// let b={
//     lastname:"poghosyan",
//     ...a
// };

// console.log(b);
// */































// /*let a=[
//     {
//         name: "Poghos",
//     },

//     {
//         age:18,
//     },
//     {
//         phone:"+374"
//     }
// ];

// let b=a.reduce(function(agrr, val){
//     if (val.name!==undefined) {
//         agrr.name=val.name;
//     }

//     if (val.age!==undefined) {
//         agrr.age=val.age;
//     }

//     if (val.phone!==undefined) {
//         agrr.phone=val.phone;
//     }
//     return agrr;
// }, {});

// console.log(b);*/













// /*let arr=[5, 6, 7, 9, 10];

// let a=arr.reduce(function(arrg, val){
//     return arrg+val;
// },0);

// console.log(a)

// let b=[1,2,3,4,5].reduce(function(arrg, val){
//     return arrg*val;
// },1);
//  console.log(b);
// */






















// /*let people=[

//     {
//         name:"Artur",
//         lastname: "Sargsyan",
//     },

//     {
//         name:"Poghos",
//         lastname:"Poghosyan",
//     }
// ];

// let names=people.map(function(val, i){
//     //console.log(val);
//     return val.name;
// });
// // console.log(names);
// //alert(nemes);
// //let nemes=[];
// //people.forEach(function(val,i){
//   //  nemes[i]=val.name;
// //});
// //alert(nemes);

// */

// /*Array.prototype.forEachh = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         const el = this[i]
//         callback(el, i, this, 'Tatev')
//     }
// }
 
// const a = [1, 2, 3, 4]

// a.forEachh((el, i, arr, log) => {
//     console.log(log)
// })
// */















// /*function find(arr, searchText) {
//     return arr.filter(function(obj) {
//       const values = Object.values(obj);
//       for(let i = 0; i < values.length; i++) {
//         const valueTxt = ""+values[i];
//         if(valueTxt.search(searchText) !== -1) {
//           return true;
//         }
//       }
//       return false;
//     });
//   }
  
//   alert(JSON.stringify(find([
//     { name: "Apple", color: "red" },
//     { name: "Banana", color: "my favorite color is yellow" },
//     { name: "Orange", color: "orange" },
//     { name: "Apple", color: "yellow" }
//   ], "yellow")));*/
// /*
// function toNumber(binaryStr){
//     return binaryStr.split("")
//                             .reverse().map(function(val, i){
//                                 if(val==="1"){
//                                     return Math.pow(2,i);
//                                 }
//                                 return 0;
//                             }).reduce(function(aggr, val){
//                                 return aggr+val;
//                             },0);
// }


// toNumber("100101");//37
// */


























// /*function getAvgAgeByColor(arr, hairColor) {
//     let filteredArray = arr.filter(function(obj) {
//       return obj.hairColor === hairColor;
//     });
    
//     let totalAge = filteredArray.reduce(function(aggr, obj) {
//       return aggr + obj.age;
//     }, 0);
    
//     return totalAge / filteredArray.length;
//   }
  
//   alert(getAvgAgeByColor([
//       {name: "Joe", age: 13, hairColor: "red"}, 
//       {name: "Mike", age: 10, hairColor: "brown"}, 
//       {name: "Jane", age: 4, hairColor: "red"}, 
//       {name: "Susan", age: 30, hairColor: "brown"}
//   ], "brown"));
// */


























// /*function transform(arr) {
//     return arr.filter(function(obj) {
//       return obj.gender === "female";
//     }).map(function(obj) {
//       return {
//         firstName: obj.fn,
//         lastName: obj.ln,
//         phone: obj.ph,
//         gender: obj.gender
//       };
//     });
//   }
  
//   alert(JSON.stringify(transform([
//       {fn: "Kate", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//       {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//       {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//       {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
//   ]), undefined, 2));
//   */




















// /*let a=" hello Armenia"
// let b=a.replaceAll("llo", "jkl");
// */





// /*function foo(name){
//     let names=name.split(" ");
//     let upperNames=names.map(function(val){
//         return val.substring(0,1).toUpperCase()+val.substring(1, val.length).toLowerCase();
//     });

//     return upperNames.join(" ");
        
//     }
// */





























// /*function raduce(arr, fun, aggr){
//       arr.forEach(function(val, i) {
//           if(i===0&&agrr===undefined){
//             aggr=val;
//           }else {
//               aggr=fun(aggr, val, i);
//           }
//       });
//       return agrr;
//     }
// alert(reduce([5, 9,10], function(acc, val, i){
//     return acc+val;
// })); */