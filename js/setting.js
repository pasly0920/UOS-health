document.addEventListener("DOMContentLoaded", function(){
    const submitBtn = document.querySelector('.start');
         

    submitBtn.addEventListener("click", ()=>{
        console.log("submit clicked");

        const heightVal = document.querySelector('#height').value;
        let weightVal = document.querySelector('#weight').value;
        let ageVal = document.querySelector('#age').value;
        const goalWeiVal = document.querySelector('#goalWei').value;

        let sexVal = null;
        const maleSelect = document.querySelector('#gender');
        const femaleSelect = document.querySelector('#gender1');
        
        if(maleSelect.checked === true)
            sexVal = "male";
        else if(femaleSelect.checked === true)
            sexVal = "female";
        else    
            sexVal = null;
        
        const lowActivity = document.querySelector('#lowActive');
        const midActivity = document.querySelector('#midActive');
        const highActivity = document.querySelector('#highActive');
        const AActivity = document.querySelector('#Active');
        
        let activity = 0;

        if(lowActivity.checked === true)
            activity = 1;
        else if(midActivity.checked === true)
            activity = 2;
        else if(highActivity.checked === true)
            activity = 3;
        else if(AActivity.checked === true)
            activity = 4;
        else    
            activity = -1;

        localStorage.setItem('height', heightVal);
        localStorage.setItem('weight', weightVal);
        localStorage.setItem('age', ageVal);
        localStorage.setItem('goalWei', goalWeiVal);
        localStorage.setItem('sex', sexVal);
        localStorage.setItem('activity', activity);

        weightVal = Number(weightVal);
        ageVal = Number(ageVal);

        if(ageVal >= 1 && ageVal <= 2)
            localStorage.setItem('goalPro', "20");
        else if(ageVal >= 3 && ageVal <= 5)
            localStorage.setItem('goalPro', "25");
        else if((ageVal >= 6 && ageVal <= 8) && (sexVal == "male"))
            localStorage.setItem('goalPro', "35");
        else if((ageVal >= 9 && ageVal <= 11) && (sexVal == "male"))
            localStorage.setItem('goalPro', "50");
        else if((ageVal >= 12 && ageVal <= 14) && (sexVal == "male"))
            localStorage.setItem('goalPro', "60");
        else if((ageVal >= 15 && ageVal <= 49) && (sexVal == "male"))
            localStorage.setItem('goalPro', "65");
        else if((ageVal >= 50 && ageVal <= 64) && (sexVal == "male"))
            localStorage.setItem('goalPro', "60");
        else if((ageVal >= 65 && ageVal <= 74) && (sexVal == "male"))
            localStorage.setItem('goalPro', "60");
        else if((ageVal >= 75) && (sexVal == "male"))
            localStorage.setItem('goalPro', "60");
        else if((ageVal >= 6 && ageVal <= 8) && (sexVal == "female"))
            localStorage.setItem('goalPro', "35");
        else if((ageVal >= 9 && ageVal <= 11) && (sexVal == "female"))
            localStorage.setItem('goalPro', "45");
        else if((ageVal >= 12 && ageVal <= 29) && (sexVal == "female"))
            localStorage.setItem('goalPro', "55");
        else
            localStorage.setItem('goalPro', "50");
        //protein set
        localStorage.setItem('goalCarbo', "130");
        //carbo set
        localStorage.setItem('goalFat', "51");
        if(ageVal >= 1 && ageVal <= 5)
            localStorage.setItem('goalSweet', "35");
        else if((ageVal >= 6 && ageVal <= 8) && (sexVal == "male"))
            localStorage.setItem('goalSweet', "43");
        else if((ageVal >= 9 && ageVal <= 11) && (sexVal == "male"))
            localStorage.setItem('goalSweet', "53");
        else if((ageVal >= 9 && ageVal <= 11) && (sexVal == "male"))
            localStorage.setItem('goalSweet', "53");
        else if((ageVal >= 12 && ageVal <= 49) && (sexVal == "male"))
            localStorage.setItem('goalSweet', "60");
        else if((ageVal >= 50) && (sexVal == "male"))
            localStorage.setItem('goalSweet', "50");
        else if((ageVal >= 6 && ageVal <= 8) && (sexVal == "female"))
            localStorage.setItem('goalSweet', "37");
        else 
            localStorage.setItem('goalSweet', "40");
        //sweet set
        localStorage.setItem('goalSodium', "1500");
        //sodium set
        if(ageVal >= 1 && ageVal <= 2)
            localStorage.setItem('goalKcal', "900");
        else if(ageVal >= 3 && ageVal <= 5)
            localStorage.setItem('goalKcal', "1400");
        else if((ageVal >= 6 && ageVal <= 8) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "1700");
        else if((ageVal >= 9 && ageVal <= 11) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2000");
        else if((ageVal >= 12 && ageVal <= 14) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2500");
        else if((ageVal >= 15 && ageVal <= 18) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2700");
        else if((ageVal >= 19 && ageVal <= 29) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2600");
        else if((ageVal >= 30 && ageVal <= 49) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2500");
        else if((ageVal >= 50 && ageVal <= 64) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2200");
        else if((ageVal >= 65 && ageVal <= 74) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "2000");
        else if((ageVal >= 75) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "1900");
        else if((ageVal >= 6 && ageVal <= 8) && (sexVal == "female"))
            localStorage.setItem('goalKcal', "1500");
        else if((ageVal >= 9 && ageVal <= 11) && (sexVal == "female"))
            localStorage.setItem('goalKcal', "1800");
        else if((ageVal >= 12 && ageVal <= 29) && (sexVal == "female"))
            localStorage.setItem('goalKcal', "2000");
        else if((ageVal >= 30 && ageVal <= 49) && (sexVal == "female"))
            localStorage.setItem('goalKcal', "1900");
        else if((ageVal >= 50 && ageVal <= 64) && (sexVal == "female"))
            localStorage.setItem('goalKcal', "1700");
        else if((ageVal >= 65 && ageVal <= 74) && (sexVal == "female"))
            localStorage.setItem('goalKcal', "1600");
        else if((ageVal >= 75) && (sexVal == "male"))
            localStorage.setItem('goalKcal', "1500");

        
    })
})