const getColor = () =>{
    const randomNumber=Math.floor(Math.random()*16777215);
    // console.log(randomNumber);
    const randomCode="#"+randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText=randomCode;
    // document.h2.style.color=randomCode;
    navigator.clipboard.writeText(randomCode)
    // confirm("color code has been copied , Now new color is displaying  ");




}

document.getElementById("btn").addEventListener("click",getColor)

getColor();

