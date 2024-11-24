let dec = null;
let inp = null;
let inc = null;
let stock = null;
let buy = null;
confirm("welcome to CrunchTime , grab your discount code \n P2Q8R4T1")
function decrement(id){
    dec=document.getElementById(id);
    let num = id.match(/\d+/g);

    // stock=document.getElementById(`stock${num}`);
    inp=document.getElementById(`box${num}inp`);
    // let x = stock.innerText;
    // let num2 = stock.match(/\d+/g);
    if(inp.value>0){
    inp.value= Number(inp.value)-1;
    }
    // stock.value=stock.value-inp.value;

    
}
function increment(id){
    dec=document.getElementById(id);
    let num = id.match(/\d+/g);
    inp=document.getElementById(`box${num}inp`);
    if(inp.value<=9){
    inp.value= Number(inp.value)+1;
    }
}
function buyer(id){
    buy=document.getElementById(id);
    let sound=new Audio("ping.mp3");
    if(inp.value!=0){
    sound.play();
    sound.currentTime=0;
    sound.playbackRate=2;
    sound.volume=100;
    }
}
    