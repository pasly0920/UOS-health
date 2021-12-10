const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
  }

const makeChart = (percent, classname, color) => {
    let i = 1;
    if(percent > 100)
        color = 'red';
    let chartFn = setInterval(function(){
        if(i <= percent){
            colorFn(i, classname, color);
            i++;
        } else {
            clearInterval(chartFn);
        }
    }, 10);
}
document.addEventListener("DOMContentLoaded", function(){
    const cafChart = document.querySelector('.caff span');
    const chart1 = document.querySelector('.caff');

    cafChart.innerHTML = "<br><br>카페인 "+ Math.round(Number(localStorage.getItem("caf")) / Number(400) * 100) +"%<br>" + localStorage.getItem("caf") + " / "+ 400 +" (mg)";
    makeChart(Math.round(Number(localStorage.getItem("caf")) / Number(400) * 100), chart1, '#6f4e37');

    //coffe input
    const submitBtn = document.querySelector('.start');

    submitBtn.addEventListener("click", function(){
        const cafVal = document.querySelector('#coffee').value;
        console.log(cafVal);
        localStorage.setItem("caf", cafVal);
        cafChart.innerHTML = "<br><br>카페인 "+ Math.round(Number(localStorage.getItem("caf")) / Number(400) * 100) +"%<br>" + localStorage.getItem("caf") + " / "+ 400 +" (mg)";
        makeChart(Math.round(Number(localStorage.getItem("caf")) / Number(400) * 100), chart1, '#6f4e37');
    })
})