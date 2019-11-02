// ==UserScript==
// @name     Pixiv-rusher-boy
// @match    https://www.pixiv.net/bookmark_new_illust.php
// @description   made by fredgy-kun
// ==/UserScript==


console.log('starid: '+localStorage.getItem('banana'));

var warnaudio = new Audio('https://files.catbox.moe/amlyta.mp3');
warnaudio.addEventListener('ended', () => {location.reload();});
//warnaudio.play();

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}


function myFn() {
    getJSON('https://www.pixiv.net/touch/ajax/follow/latest?type=illusts&p=1&include_meta=1', function(err, data) {
        if (err !== null) {
            console.log('Something went wrong: ' + err);
        }
        else {
            console.log('Hello I wan ');
            console.log('Checkout the latest id ', data.body["illusts"][0]["id"]);
            if(localStorage.getItem('banana') < data.body["illusts"][0]["id"]){
                console.log('IT IS NEW');
                localStorage.setItem('banana', data.body["illusts"][0]["id"]);
                warnaudio.play(); // maybe it works now

            }
        }
    }
           );

}

setInterval(myFn, 5000)
