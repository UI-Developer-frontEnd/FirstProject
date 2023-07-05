function insertOnClick(){
    var userEle = document.getElementById('nme');
    var app = document.getElementById('para');
    app.innerHTML = userEle;
    if(app ==""){
        document.getElementById('header').style.display ='none';
    }
}
