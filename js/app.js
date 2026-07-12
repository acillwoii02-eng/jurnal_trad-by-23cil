const ctx=document.getElementById("profitChart");

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Profit",

data:[100,220,170,330,280,450,620],

borderWidth:3,

fill:true,

tension:.4

}]

}

});
