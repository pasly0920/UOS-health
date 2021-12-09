//     console.log(db.diets.where("date").between(211121, 211126).toArray());
class DB{
    constructor(){
        this.db = new Dexie("UOS-health-diet");

        this.db.version(1).stores({
            nutrients : `
               date,
               Kcal,
               carbo,
               pro,
               fat,
               sweet,
               sodium`, //nutrient
            recomended : `
                goalPro,
                goalCarbo,
                goalFat,
                goalSweet,
                goalSodium,
                goalKcal`
        });
    }
    addTotal(_Kcal, _carbo, _pro, _fat, _sweet, _sodium){
        this.db.open().then(()=>{
            return this.db.nutrients.add({
                date: getToday(), 
                Kcal: _Kcal,
                carbo: _carbo,
                pro: _pro,
                fat: _fat,
                sweet: _sweet,
                sodium: _sodium
            });
        }).catch((e)=>{
            console.log(e);
        })
    }
    addRecomend(_goalPro, _goalCarbo, _goalFat, _goalSweet, _goalSodium, _goalKcal){
        this.db.open().then(()=>{
            return this.db.recomended.add({ 
                goalPro: _goalPro,
                goalCarbo: _goalCarbo,
                goalFat: _goalFat,
                goalSweet: _goalSweet,
                goalSodium: _goalSodium,
                goalKcal: _goalKcal
            });
        }).catch((e)=>{
            console.log(e);
        })
    }
}
function getToday(){
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0"+(1+today.getMonth())).slice(-2);
    const date = ("0"+today.getDate()).slice(-2);

    return year+month+date;
}

window.onload = ()=>{
    const app = new DB();
    console.log("Using Dexie " + Dexie.semVer);
    console.log(getToday());
    if(localStorage.getItem("goalPro") !== "null" && localStorage.getItem('check') !== "true"){
        app.addRecomend(localStorage.getItem("goalPro"), localStorage.getItem("goalCarbo"), localStorage.getItem("goalFat"), localStorage.getItem("goalSweet"), localStorage.getItem("goalSodium"), localStorage.getItem("goalKcal"));
        //chart 수정
        const proChart = document.querySelector('.pro span');
        proChart.innerHTML = "<br><br>단백질 80%<br>2100 / "+ localStorage.getItem('goalPro') +" (g)";
        const carboChart = document.querySelector('.carbo span');
        carboChart.innerHTML = "<br><br>탄수화물 50%<br>0 / "+ localStorage.getItem('goalCarbo') +" (g)";
        const fatChart = document.querySelector('.fat span');
        fatChart.innerHTML = "<br><br>지방 50%<br>0 / "+ localStorage.getItem('goalFat') +" (g)";
        const sweetChart = document.querySelector('.sweet span');
        sweetChart.innerHTML = "<br><br>당류 80%<br>0 / "+ localStorage.getItem('goalSweet') +" (g)";
        const sodiumChart = document.querySelector('.natrium span');
        sodiumChart.innerHTML = "<br><br>나트륨 80%<br>0 / "+ localStorage.getItem('goalSodium') +" (mg)";
        const kcalChart = document.querySelector('.calrorie span');
        kcalChart.innerHTML = "<br><br>총 칼로리 120%<br>0 / "+ localStorage.getItem('goalKcal') +" (Kcal)";
        //check 변수 설정
        localStorage.setItem('check', "true"); 
    }
    document.addEventListener("DOMContentLoaded", function(){
        const submitBtn = document.querySelector('.dietInput fas');
        submitBtn.addEventListener("click", function(){
        app.addTotal(localStorage.getItem('Kcal'), localStorage.getItem('carbo'), localStorage.getItem('pro'), localStorage.getItem('fat'), localStorage.getItem('sweet'), localStorage.getItem('sodium'));
        //slide up??
        })
    })
    
};