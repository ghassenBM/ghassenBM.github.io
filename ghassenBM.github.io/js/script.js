function RequeteApi(elementID, url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            document.getElementById(elementID).innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function homePageLoading() {
    url = 'https://api.blockcypher.com/v1/btc/main';
    elementID = 'info';
    RequeteApi(elementID, url);
    url = 'https://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'block';
    RequeteApi(elementID, url);
    url = 'https://bitcoin.mubiz.com/mininginfo';
    elementID = 'mining';
    RequeteApi(elementID, url);
    url = 'https://bitcoin.mubiz.com/peerinfo';
    elementID = 'peer';
    RequeteApi(elementID, url);
}

function loadHash() {
    var url = document.getElementById('adresse').value;
    var elementID = 'chain';
    //   window.alert(url);
    RequeteApi(elementID, url);
}
