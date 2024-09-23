var a=10;
var b=30;
console.log(a);


function phone(){
    console.log("I use OnePlus Nord 5G")
}
phone()


var a=10;
var b=70;
function add(){
    console.log(a+b);
    c=a+b;
    console.log(c+2);
}
add();


var factor="Lily";
var fplayer="Dhoni";
var fmovie="Dear Comrade";
function favourite(){
    console.log("Favourite Actor:",factor);
    console.log("Favourite Player:"+fplayer);
    console.log("\n",fmovie);
}
favourite();


function area(l,b){
    console.log(l*b);
}
area(10,20);


function myname()
{
    return "John";
}
var a=myname();
console.log(a);


function add(a,b)
{
    return a+b;
}
var x=add(10,60);
console.log(x);


var rain=false
if(rain){
    console.log("Umbrella");
}
else{
    console.log("Sunshine");
}


var cookies=true;
if(cookies)
{
    console.log("Available");
}
else{
    console.log("Over");
}


var cookies=false;
if(cookies)
{
    console.log("Available");
}
else{
    console.log("Over");
}


console.log(true)
console.log(!true)


var s="Spring";
var s="autumn";
if(s=="Spring")
{
    console.log("Spring");
}
if(s=="autumn")
{
    console.log("Autumn.");
}


var score=10;
if(score=="50")
{
    console.log("Good");
}
else if(score>80)
{
    console.log("Better than before");
}
else{
    console.log("worst");
}


for(count=1;count<=10;count+=2)
{
    console.log(count);
}


for(i=10;i>0;i--)
{
    console.log(i);
}


for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


for(i=1;i<=3;i++)
{
    console.log(i+"x2="+i*2);
}