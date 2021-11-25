document.addEventListener("DOMContentLoaded", function(){
    const submitBtn = document.querySelector('.start');
         

    submitBtn.addEventListener("click", ()=>{
        console.log("submit clicked");

        const heightVal = document.querySelector('#height').value;
        const weightVal = document.querySelector('#weight').value;
        const ageVal = document.querySelector('#age').value;
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
    })

})