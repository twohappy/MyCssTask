
function ChangeColor ()
{
123
function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}

var num = GetRandomNum(1,9);
var color = GetRandomNum(1,3);

if (color < 2) 
    {
    document.getElementById(num).className = "box box-red col-md-4 col-xs-4";
    }
else if (color > 2) {
    document.getElementById(num).className = "box box-green col-md-4 col-xs-4";
}

else {
    document.getElementById(num).className = "box box-blue col-md-4 col-xs-4";
}
}



setInterval(ChangeColor,200);
