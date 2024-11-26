let dec = null;
let inp = null;
let inc = null;
let stock = null;
let buy = null;
let sum = 0;
let a=1;
let discount = document.getElementById("dis");
let discountButton = document.getElementById("count");
let cost = document.getElementById("totalcost");
let count = 0;
let d = false;
let button = null;

confirm("WELCOME TO CRUNCHTIME , GRAB YOUR DISCOUNT CODE - p2q8r4t1")
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
    let num = parseInt(id.match(/\d+/g));
    inp=document.getElementById(`box${num}inp`);
    stock=document.getElementById(`stock${num}`);
    let x = stock.innerText;
    let num2 =parseInt(x.match(/\d+/g));
    let inpval = inp.value
    //discount
    if(num2>0 && inpval<=num2 && inpval>0){
    //cost
    let totalcosttext = cost.innerText;
    let tcval = totalcosttext.match(/\d+/g);
    

    //calc amount
    if(num==2 || num==7 || num==9 ){
        //10$
        sum+=10*inpval;
        
    }
    else if(num==1 || num==4 || num==5 ){
        //20$
        sum+=20*inpval;
    }
    else if(num==3 || num==6){
        //25$
        sum+=25*inpval;
    }
    else if(num==8){
        //30
        sum+=30*inpval;
    }
    else if(num==12){
        //35$
        sum+=35*inpval;
    }
    else if(num==10){
        //40
        sum+=40*inpval;
    }
    else if(num==11){
        //50
        sum+=50*inpval;
    }
    

    console.log(sum);
    if(!d){
    cost.innerHTML = `<h3>TOTAL COST -  <i class="fa fa-inr"></i> ${Math.round(sum*a)}</h3>`;
    }
    else{
        cost.innerHTML = `<h3>TOTAL COST -  <i class="fa fa-inr"></i> ${Math.round(sum*a)} (DISCOUNTED)</h3>`
    }

    // update
    
    num2 = num2 - inpval;
    stock.innerHTML = `<h4>TOTAL STOCK - ${num2}</h4>`
    
    //sound
    let sound=new Audio("ping.mp3");
    if(inp.value!=0){
    sound.play();
    sound.currentTime=0;
    sound.playbackRate=2;
    }
    inp.value = 0;
}
else{
    alert("INVALID INPUT OR INSUFFICIENT STOCK!!!");
    inp.value=0;
}
}

discountButton.addEventListener("click",(event)=>{
    if(count==0){
    if(discount.value=="p2q8r4t1"){
        if(sum==0){
            alert("PLEASE SELECT ATLEAST SINGLE ITEM TO GET DISCOUNT!!!");
            discount.value="";
        }
        a=0.7;
        cost.innerHTML = `<h3>TOTAL COST -  <i class="fa fa-inr"></i> ${Math.round(sum*a)} (DISCOUNTED)</h3>`
        count++;
        d=true;
        if(sum!=0){
        let sound=new Audio("ping.mp3");  
        sound.play();
        sound.currentTime=0;
        sound.playbackRate=2;
        discount.value="";
        }
    }
    else{
    alert("DISCOUNT CODE EXPIRED!!!");
    discount.value="";
    }
}
else{
    alert("DISCOUNT ALREADY ADDED!!!");
    discount.value="";
}
});
function clickme(){
if(sum!=0){
let conclusion = document.getElementById('conc');
conclusion.style.margin ="3rem 0";
    setTimeout(()=>{
    conclusion.innerHTML = `<h1>processing</h1>`;
    conclusion.style.display = 'relative';
    conclusion.style.color ='black';
    conclusion.style.transition = "text-shadow 1s ease";

    },500);
    setTimeout(()=>{
        conclusion.innerHTML = ``;
        conclusion.style.display = 'relative';
        conclusion.style.color ='black';
        conclusion.style.transition = "text-shadow 1s ease";


        },1000);
        setTimeout(()=>{
            conclusion.innerHTML = `<h1>processing</h1>`;
            conclusion.style.display = 'relative';
            conclusion.style.color ='black';
            conclusion.style.transition = "text-shadow 1s ease";


            },1500);
            setTimeout(()=>{
                conclusion.innerHTML = ``;
                conclusion.style.display = 'relative';
                conclusion.style.color ='black';
                conclusion.style.transition = "text-shadow 1s ease";


                },2000);
                setTimeout(()=>{
                    conclusion.innerHTML = `<h1>processing</h1>`;
                    conclusion.style.display = 'relative';
                    conclusion.style.color ='black';
                    conclusion.style.transition = "text-shadow 1s ease";


                    },2500);
// --------------------------------------------------------------------------------------------------------

    setTimeout(()=>{
        conclusion.innerHTML = `<h1>please wait</h1>`;
        conclusion.style.display = 'relative';
        conclusion.style.color ='black';
        conclusion.style.transition = "text-shadow 1s ease";


        },3000);
        setTimeout(()=>{
            conclusion.innerHTML = `<h1>please wait...</h1>`;
            conclusion.style.display = 'relative';
            conclusion.style.color ='black';
            conclusion.style.transition = "text-shadow 1s ease";

    
            },3500);
            setTimeout(()=>{
                conclusion.innerHTML = `<h1>please wait</h1>`;
                conclusion.style.display = 'relative';
                conclusion.style.color ='black';
                conclusion.style.transition = "text-shadow 1s ease";
                
        
                },4000);
                setTimeout(()=>{
                    conclusion.innerHTML = `<h1>please wait...</h1>`;
                    conclusion.style.display = 'relative';
                    conclusion.style.color ='black';
                    conclusion.style.transition = "text-shadow 1s ease";

            
                    },4500);
                    setTimeout(()=>{
                        conclusion.innerHTML = `<h1>please wait</h1>`;
                        conclusion.style.display = 'relative';
                        conclusion.style.color ='black';
                        conclusion.style.transition = "text-shadow 1s ease";

                
                        },5000);
                        setTimeout(()=>{
                            conclusion.innerHTML = `<h1>please wait...</h1>`;
                            conclusion.style.display = 'relative';
                            conclusion.style.color ='black';
                            conclusion.style.transition = "text-shadow 1s ease";

                    
                            },5500);
                            setTimeout(()=>{
                                conclusion.innerHTML = `<h1>please wait</h1>`;
                                conclusion.style.display = 'relative';
                                conclusion.style.color ='black';
                                conclusion.style.transition = "text-shadow 1s ease";

                        
                                },6000);
                                setTimeout(()=>{
                                    conclusion.innerHTML = `<h1>please wait...</h1>`;
                                    conclusion.style.display = 'relative';
                                    conclusion.style.color ='black';
                                    conclusion.style.transition = "text-shadow 1s ease";

                            
                                    },6500);

// --------------------------------------------------------------------------------------------------------

    setTimeout(()=>{
            conclusion.innerHTML = `<h1>PAYMENT SUCCESSFUL</h1>`;
            conclusion.style.display = 'relative';
            conclusion.style.color ='black';
            conclusion.style.transition = "text-shadow 1s ease";


            },10000);
    setTimeout(()=>{
            conclusion.innerHTML = `<h1>YOUR ITEMS ARE DISPATCHED!!!</h1>`;
            conclusion.style.display = 'relative';
            conclusion.style.color ='BLACK';
            conclusion.style.transition = "text-shadow 1s ease";

            },12000);
            setTimeout(()=>{
                conclusion.innerHTML = `<h1>THANK YOU COME AGAIN <i class='fas fa-grin-beam' style='font-size:48px;color:green'></i></h1> `;
                conclusion.style.display = 'relative';
                conclusion.style.color ='green';
                conclusion.style.transition = "text-shadow 1s ease";

                },17000);
            
                setTimeout(()=>{
                    a=1;
                    count = 0;
                    d = false;
                    sum = 0;
                    cost.innerHTML = `<h3>TOTAL COST -  <i class="fa fa-inr"></i> 0 </h3>`        
                    },17000);
    
}
else{
    alert("PLEASE SELECT ATLEAST SINGLE ITEM TO PAY!!!");
}
}