document.addEventListener("DOMContentLoaded", function(){

    const sc1 = document.querySelector('.search1');
    const sc2 = document.querySelector('.search2');
    const sc3 = document.querySelector('.search3');

    async function listSelect(target){
        const _calrorie = target.getAttribute('calorie');
        const _carbo = target.getAttribute('carbo');
        const _pro = target.getAttribute('pro');
        const _fat = target.getAttribute('fat');
        const _sweet = target.getAttribute('sweet');
        const _sodium = target.getAttribute('sodium');

        let check = await localStorage.getItem('Kcal');

        if(_calrorie !== "N/A"){
            if(check == null)// 원래 없었음
                localStorage.setItem("Kcal", _calrorie);
            else{
                let rec = Number(localStorage.getItem("Kcal"));
                rec += Number(_calrorie);
                rec = Math.round(rec);
                localStorage.setItem("Kcal", String(rec));
            }
        }
        else{
            if(check == null)
                localStorage.setItem("Kcal", "0");
        }
        if(_carbo !== "N/A"){
            if(check == null)
                localStorage.setItem("carbo", _carbo);
            else{
                let rec = Number(localStorage.getItem("carbo"));
                rec += Number(_carbo);
                rec = Math.round(rec);
                localStorage.setItem("carbo", String(rec));
            }
        }
        else{
            if(check == null)
                localStorage.setItem("carbo", "0");
        }
        if(_pro !== "N/A"){
            if(check == null)
                localStorage.setItem("pro", _pro);
            else{
                let rec = Number(localStorage.getItem("pro"));
                rec += Number(_pro);
                rec = Math.round(rec);
                localStorage.setItem("pro", String(rec));
            }
        }
        else{
            if(check == null)
                localStorage.setItem("pro", "0");
        }
        if(_fat !== "N/A"){
            if(check == null)
                localStorage.setItem("fat", _fat);
            else{
                let rec = Number(localStorage.getItem("fat"));
                rec += Number(_fat);
                rec = Math.round(rec);
                localStorage.setItem("fat", String(rec));
            }
        }
        else{
            if(check == null)
                localStorage.setItem("fat", "0");
        }
        if(_sweet !== "N/A"){
            if(check == null)
                localStorage.setItem("sweet", _sweet);
            else{
                let rec = Number(localStorage.getItem("sweet"));
                rec += Number(_sweet);
                rec = Math.round(rec);
                localStorage.setItem("sweet", String(rec));
            }
        }
        else{
            if(check == null)
                localStorage.setItem("sweet", "0");
        }
        if(_sodium !== "N/A"){
            if(check == null)
                localStorage.setItem("sodium", _sodium);
            else{
                let rec = Number(localStorage.getItem("sodium"));
                rec += Number(_sodium);
                rec = Math.round(rec);
                localStorage.setItem("sodium", String(rec));
            }
        }
        else{
            if(check == null)
                localStorage.setItem("sodium", "0");
        }
    }

    sc1.addEventListener('submit', function(event){
        const keyword1 = document.querySelector('.keyword1');
        event.preventDefault();
        const target = document.querySelector('.searchRes1 ul');
        const items = target.getElementsByTagName('li');

        const searchResult1 = document.querySelector('.searchRes1');
        searchResult1.style.height = "150px";

        while(items.length > 0){
            items[0].remove();
        }
        fetch("http://localhost:3000/" + keyword1.value, {redirect: 'follow'})
            .then(res => res.json())
            .then(data => {
                console.log(data.totalCount);
                data.items.forEach(element => {
                    const li = document.createElement("li");
                    li.setAttribute('SERVING_WT', element.SERVING_WT);
                    li.setAttribute('calorie', element.NUTR_CONT1);
                    li.setAttribute('carbo', element.NUTR_CONT2);
                    li.setAttribute('pro', element.NUTR_CONT3);
                    li.setAttribute('fat', element.NUTR_CONT4);
                    li.setAttribute('sweet', element.NUTR_CONT5);
                    li.setAttribute('sodium', element.NUTR_CONT6);
                    li.innerText = element.DESC_KOR;
                    target.appendChild(li);
                });
            })
            .then( t => {
                const list = document.querySelectorAll('.searchRes1 .list li');
                const resList = document.querySelector('.morningMenu .list');

                const listLength = list.length;

                for(let i = 0; i < listLength; i++){
                    list[i].addEventListener("click", function(evt){
                        listSelect(list[i])
                            .then( tr => {
                                const resLi = document.createElement("li");
                                resLi.innerText = evt.target.innerText;
                                resList.appendChild(resLi);
                             })
                            .then(
                                t => {
                                    while(items.length > 0){
                                        items[0].remove();
                                    }
                                    searchResult1.style.height = "0";
                                }
                            )
                            .catch(err => console.log(err));
                    })
                }
            }
            )
            .catch(err => console.log(err));
    })
    sc2.addEventListener('submit', function(event){
        const keyword2 = document.querySelector('.keyword2');
        event.preventDefault();
        const target = document.querySelector('.searchRes2 ul');
        const items = target.getElementsByTagName('li');
        const searchResult2 = document.querySelector('.searchRes2');
        searchResult2.style.height = "150px";

        while(items.length > 0){
            items[0].remove();
        }
        fetch("http://localhost:3000/" + keyword2.value, {redirect: 'follow'})
            .then(res => res.json())
            .then(data => {
                console.log(data.totalCount);
                data.items.forEach(element => {
                    const li = document.createElement("li");
                    li.setAttribute('SERVING_WT', element.SERVING_WT);
                    li.setAttribute('calorie', element.NUTR_CONT1);
                    li.setAttribute('carbo', element.NUTR_CONT2);
                    li.setAttribute('pro', element.NUTR_CONT3);
                    li.setAttribute('fat', element.NUTR_CONT4);
                    li.setAttribute('sweet', element.NUTR_CONT5);
                    li.setAttribute('sodium', element.NUTR_CONT6);
                    li.innerText = element.DESC_KOR;
                    target.appendChild(li);
                });
            })
            .then( t => {
                const list = document.querySelectorAll('.searchRes2 .list li');
                const resList = document.querySelector('.lunchMenu .list');

                const listLength = list.length;

                for(let i = 0; i < listLength; i++){
                    list[i].addEventListener("click", function(evt){
                        listSelect(list[i])
                            .then( tr => {
                                const resLi = document.createElement("li");
                                resLi.innerText = evt.target.innerText;
                                resList.appendChild(resLi);
                            })
                            .then(
                                t => {
                                    while(items.length > 0){
                                        items[0].remove();
                                    }
                                    searchResult2.style.height = "0";
                                }
                            )
                            .catch(err => console.log(err));
                    })
                }
            }
            )
            .catch(err => console.log(err));
    })
    sc3.addEventListener('submit', function(event){
        const keyword3 = document.querySelector('.keyword3');
        event.preventDefault();
        const target = document.querySelector('.searchRes3 ul');
        const items = target.getElementsByTagName('li');

        const searchResult3 = document.querySelector('.searchRes3');
        searchResult3.style.height = "150px";

        while(items.length > 0){
            items[0].remove();
        }
        fetch("http://localhost:3000/" + keyword3.value, {redirect: 'follow'})
            .then(res => res.json())
            .then(data => {
                console.log(data.totalCount);
                data.items.forEach(element => {
                    const li = document.createElement("li");
                    li.setAttribute('SERVING_WT', element.SERVING_WT);
                    li.setAttribute('calorie', element.NUTR_CONT1);
                    li.setAttribute('carbo', element.NUTR_CONT2);
                    li.setAttribute('pro', element.NUTR_CONT3);
                    li.setAttribute('fat', element.NUTR_CONT4);
                    li.setAttribute('sweet', element.NUTR_CONT5);
                    li.setAttribute('sodium', element.NUTR_CONT6);
                    li.innerText = element.DESC_KOR;
                    target.appendChild(li);
                });
            })
            .then( t => {
                const list = document.querySelectorAll('.searchRes3 .list li');
                const resList = document.querySelector('.dinnerMenu .list');

                const listLength = list.length;

                for(let i = 0; i < listLength; i++){
                    list[i].addEventListener("click", function(evt){
                        listSelect(list[i])
                            .then( tr => {
                                const resLi = document.createElement("li");
                                resLi.innerText = evt.target.innerText;
                                resList.appendChild(resLi);
                            })
                            .then(
                                t => {
                                    while(items.length > 0){
                                        items[0].remove();
                                    }
                                    searchResult3.style.height = "0";
                                }
                            )
                            .catch(err => console.log(err));
                    })
                }
            }
            )
            .catch(err => console.log(err));
    })
})
