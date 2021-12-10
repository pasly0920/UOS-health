function getToday(){
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0"+(1+today.getMonth())).slice(-2);
    const date = ("0"+today.getDate()).slice(-2);

    return Number(year+month+date);
}
function getRecent(){
    const today = new Date();
    monthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = ("0"+today.getDate()).slice(-2);
    const month = ("0"+(1+today.getMonth())).slice(-2);
    
    let arr = [];
    
    if(Number(date) - 6 <0){
        let initial = Number(date) - 6;
        const dif = 0 - initial;
        let pastMonth = Number(("0"+(today.getMonth())).slice(-2));
        let nowMonth = Number(("0"+(1+today.getMonth())).slice(-2));
        let startDay = String(getToday()).slice(-2) + String(monthDay[pastMonth]);
        startDay = Number(startDay) - dif;
        while(startDay <= monthDay[pastMonth]){
            arr.push(localStorage.getItem(String(startDay)));
            startDay++;
        }
        startDay = String(getToday()).slice(-2) + "01";
        startDay = Number(startDay);
        while(startDay <= Number(date)){
            arr.push(localStorage.getItem(String(startDay)));
            startDay++;
        }
    }
    else{
        let initial = 6;
        while(initial >= 0){
            arr.push(localStorage.getItem(String(getToday() - initial)));
            initial--;
        }
    }
    return arr
}

document.addEventListener("DOMContentLoaded", function(){
    const recentSleep = getRecent();
    const today = new Date();
    const date = Number(today.getDate());
    let trace = {
        x: [date - 6, date - 5, date - 4, date -3, date - 2, date - 1, date],
        y: recentSleep,
        type: 'scatter'
    };
    const layout = {
        width: 700,
        height: 450,
        title: '주간 수면 추이',
        xaxis: {
            title: 'Date',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Sleep time',
            showline: false
        },
        plot_bgcolor: "rgb(247, 247, 247)",
        paper_bgcolor: "transparent",
        annotations: [
            {
                font: {
                    family: 'Arial',
                    size: 30
                }
            }
        ]
    }
    const graphDiv = document.querySelector('.sleep .sleepGraph');
    console.log(trace);
    Plotly.newPlot(graphDiv, [trace], layout);

    //sleep input 
    const submitBtn = document.querySelector('.start');

    submitBtn.addEventListener("click", function(){
        const sleepH = document.querySelector('#hour').value;
        const sleepM = document.querySelector('#min').value;
        
        localStorage.setItem(getToday(), String(Number(sleepH) + Number(sleepM) / 60));
    })
})