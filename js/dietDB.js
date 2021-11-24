//     console.log(db.diets.where("date").between(211121, 211126).toArray());
class DB{
    constructor(){
        this.db = new Dexie("UOS-health-diet");

        this.db.version(1).stores({
            diets : `
                date,
                breakfast,
                lunch,
                dinner,
                total`, //nutrient
        });
    }
    addData(_date, _breakfast = null, _lunch = null, _dinner = null, _total){
        this.db.open().then(()=>{
            return this.db.diets.add({
                date: getToday(), 
                breakfast: _breakfast, 
                lunch: _lunch,
                dinner: _dinner,
                total: _total
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
    //app.addData(getToday(), 200, null, 300, [120, 300, 500]);
    
};