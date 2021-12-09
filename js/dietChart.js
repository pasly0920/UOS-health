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
    const chart1 = document.querySelector('.pro');
    const chart2 = document.querySelector('.carbo');
    const chart3 = document.querySelector('.fat');

    const chart4 = document.querySelector('.sweet');
    const chart5 = document.querySelector('.natrium');
    const chart6 = document.querySelector('.calrorie');

    const proChart = document.querySelector('.pro span');
    const carboChart = document.querySelector('.carbo span');
    const fatChart = document.querySelector('.fat span');
    const sweetChart = document.querySelector('.sweet span');
    const sodiumChart = document.querySelector('.natrium span');
    const kcalChart = document.querySelector('.calrorie span');

    makeChart(80, chart1, '#ffafb0');   
    makeChart(50, chart2, '#b5c7ed');
    makeChart(50, chart3, '#ffe4af');
    makeChart(80, chart4, '#afffba');
    makeChart(80, chart5, '#fdfa87');
    makeChart(120, chart6, 'aquamarine');

    document.querySelector('.dietInput .fas').addEventListener("click", function(){
        
        console.log("clicked");
    })
})

