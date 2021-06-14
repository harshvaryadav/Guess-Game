var N;
function numGenerator()
{
         N=Math.ceil(Math.random()*100);
         document.getElementById("h").disabled=false;
         document.getElementById("btn").disabled=false;
         document.getElementById("s1").innerHTML="";
         document.getElementById("s2").innerHTML="10";
         var Btn=document.getElementById("btn2");
         Btn.disabled=true;
         Btn.style.visibility="hidden";
         document.getElementById("h2").innerHTML="";

}
function fun()
{
    var temp=document.getElementById("h").value;
    document.getElementById("h").value="";
    if(isNaN(temp))
    {
       window.alert("enter valid input");
    }
    else
    {
         var rem=document.getElementById("s2").innerHTML;
         if(temp==N)
         {
            document.getElementById("h").disabled=true;
            document.getElementById("btn").disabled=true;
            var Btn=document.getElementById("btn2");
            Btn.disabled=false;
            Btn.style.visibility="visible";
            document.getElementById("h2").innerHTML="You guessed Correctly!";
         }
         else
         {
            if(temp>N)
           {
              document.getElementById("h2").innerHTML="To High! TRY Again!";    
           }
           else
           {
              document.getElementById("h2").innerHTML="To Low! TRY Again!";
           }
         }
         rem=rem-1;
         document.getElementById("s2").innerHTML=rem;
         var it=document.getElementById("s1");
         it.innerHTML=it.innerHTML+" "+temp;
        if(rem==0)
        {
           document.getElementById("h2").innerHTML="Game Over! Number was "+N;
           document.getElementById("h").disabled=true;
           document.getElementById("btn").disabled=true;
           var Btn=document.getElementById("btn2");
           Btn.disabled=false;
           Btn.style.visibility="visible";    
        }
     }
}  
