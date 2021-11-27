const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + "0%" + i + "%, #dedede" + i + "% 100%)";
}

const makeChart = (percent, classname, color) => {
    let i = 1;
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

    const chart4 = document.querySelector('sweet');
    const chart5 = document.querySelector('natrium');

    makeChart(80, chart1, '#66d2ce');
})

