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
function getToday(){
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0"+(1+today.getMonth())).slice(-2);
    const date = ("0"+today.getDate()).slice(-2);

    return String(year+month+date) + "D";
}
document.addEventListener("DOMContentLoaded", function(){
    const today = getToday();

    if(localStorage.getItem(today) == null){
        localStorage.setItem(getToday(), true);
        localStorage.setItem("fat", 0);
        localStorage.setItem("pro", 0);
        localStorage.setItem("carbo", 0);
        localStorage.setItem("sweet", 0);
        localStorage.setItem("sodium", 0);
        localStorage.setItem("Kcal", 0);
    }

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

    makeChart(0, chart1, '#ffafb0');   
    makeChart(0, chart2, '#b5c7ed');
    makeChart(0, chart3, '#ffe4af');
    makeChart(0, chart4, '#afffba');
    makeChart(0, chart5, '#fdfa87');
    makeChart(0, chart6, 'aquamarine');
    
    document.querySelector('.dietInput .fas').addEventListener("click", function(){
        proChart.innerHTML = "<br><br>단백질 "+ Math.round(Number(localStorage.getItem("pro")) / Number(localStorage.getItem('goalPro')) * 100) +"%<br>" + localStorage.getItem("pro") + " / "+ localStorage.getItem('goalPro') +" (g)";
        makeChart(Math.round(Number(localStorage.getItem("pro")) / Number(localStorage.getItem('goalPro')) * 100), chart1, '#ffafb0');
        carboChart.innerHTML = "<br><br>탄수화물 "+ Math.round(Number(localStorage.getItem("carbo")) / Number(localStorage.getItem('goalCarbo')) * 100) +"%<br>" + localStorage.getItem("carbo") + " / "+ localStorage.getItem('goalCarbo') +" (g)";
        makeChart(Math.round(Number(localStorage.getItem("carbo")) / Number(localStorage.getItem('goalCarbo')) * 100), chart2, '#b5c7ed');
        fatChart.innerHTML = "<br><br>지방 "+ Math.round(Number(localStorage.getItem("fat")) / Number(localStorage.getItem('goalFat')) * 100) +"%<br>" + localStorage.getItem("fat") + " / "+ localStorage.getItem('goalFat') +" (g)";
        makeChart(Math.round(Number(localStorage.getItem("fat")) / Number(localStorage.getItem('goalFat')) * 100), chart3, '#ffe4af');
        sweetChart.innerHTML = "<br><br>당류 "+ Math.round(Number(localStorage.getItem("sweet")) / Number(localStorage.getItem('goalSweet')) * 100) +"%<br>" + localStorage.getItem("sweet") + " / "+ localStorage.getItem('goalSweet') +" (g)";
        makeChart(Math.round(Number(localStorage.getItem("sweet")) / Number(localStorage.getItem('goalSweet')) * 100), chart4, '#afffba');
        sodiumChart.innerHTML = "<br><br>나트륨 "+ Math.round(Number(localStorage.getItem("sodium")) / Number(localStorage.getItem('goalSodium')) * 100) +"%<br>" + localStorage.getItem("sodium") + " / "+ localStorage.getItem('goalSodium') +" (mg)";
        makeChart(Math.round(Number(localStorage.getItem("sodium")) / Number(localStorage.getItem('goalSodium')) * 100), chart5, '#fdfa87');
        kcalChart.innerHTML = "<br><br>총 칼로리 "+ Math.round(Number(localStorage.getItem("Kcal")) / Number(localStorage.getItem('goalKcal')) * 100) +"%<br>" + localStorage.getItem("Kcal") + " / "+ localStorage.getItem('goalKcal') +" (mg)";
        makeChart(Math.round(Number(localStorage.getItem("Kcal")) / Number(localStorage.getItem('goalKcal')) * 100), chart6, 'aquamarine');
        console.log("clicked");
        
    })
})

