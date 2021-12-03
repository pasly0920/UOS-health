document.addEventListener("DOMContentLoaded", function(){

    const sc1 = document.querySelector('.search1');
    const sc2 = document.querySelector('.search2');
    const sc3 = document.querySelector('.search3');

    sc1.addEventListener('submit', function(event){
        const keyword1 = document.querySelector('.keyword1');
        event.preventDefault();
        console.log(keyword1.value);
    })
    sc2.addEventListener('submit', function(event){
        const keyword2 = document.querySelector('.keyword2');
        event.preventDefault();
        console.log(keyword2.value);
    })
    sc3.addEventListener('submit', function(event){
        const keyword3 = document.querySelector('.keyword3');
        event.preventDefault();
        console.log(keyword3.value);
    })
})
