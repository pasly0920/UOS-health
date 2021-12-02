document.addEventListener("DOMContentLoaded", function(){
    //preflight request
    const now_link = window.location.href;
    console.log(now_link);

    const sc1 = document.querySelector('.search1');
    const sc2 = document.querySelector('.search2');
    const sc3 = document.querySelector('.search3');

    sc1.addEventListener('submit', function(event){
        const keyword1 = document.querySelector('.keyword1');
        event.preventDefault();
        apiRequest(keyword1.value);
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
function apiRequest(word){
    const serviceKey = "N41Inf4Co88iV2GFmLqoAZCKLjIcn1uV%2Frr3EJM%2F%2BX%2Br0URo3I1cCHat9hnBmeWn0MGmGlgemYyRGNA6STk8Jg%3D%3D";
    let requestUrl = "http://apis.data.go.kr/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList1"
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
    queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent(word);
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100');
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');

    fetch(requestUrl + queryParams, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'origin': 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1'
            // "x-cors-grida-api-key": "9ebe4d4c94515bb7a6a2"
        }
    }).then((response) => console.log(response))
        .catch((error) => console.log(error));
}
