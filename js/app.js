// var a  = 10;
// function factorial( a)
// {
//     if(a==1)
//     return 1;

//     var small = factorial(a-1);
//     var big = a * small;
//     console.log("big"+big)
//     return big;

// }
// console.log(factorial(a));
(function(){
    let social=document.querySelectorAll('.social div')

    social.forEach(function(social,ravi){

        social.style.animation=`moveIn .5s cubic-bezier(.51,.92,.24,1.15) forwards ${ravi/9 + 0.1}s`
    })



}())





function pascal()
{
   var rows = 7, coef = 1;

 
   

    for(var i = 0; i < rows; i++)
    {
        for(var space = 1; space <= rows-i; space++)
            cout <<"  ";

        for(var j = 0; j <= i; j++)
        {
            if (j == 0 || i == 0)
                coef = 1;
            else
                coef = coef*(i-j+1)/j;

            document.write(coef + "  ");
        }
       document.write("<br>")
    }

    return 0;
}
pascal();