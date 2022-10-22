
let audiocontainer = document.getElementById("radio");
let radiotitle = document.getElementById("current_playing");
let radioList = document.getElementById("radioList");

let currentRadio = 0;

// https://radioplay.zendesk.com/hc/sv/articles/207516896-Var-hittar-jag-era-ljudstr%C3%B6mmar-streaming-URL-er-
const radioStations = [
    {
        url : 'http://tx-bauerse.sharp-stream.com/http_live.php?i=nrj_instreamtest_se_mp3',
        title : 'NRJ Sverige',
        id : 0,
    },
    {
        url : 'http://tx-bauerse.sharp-stream.com/http_live.php?i=mixmegapol_instream_se_mp3',
        title : 'Mix Megapol',
        id : 1,
    },
    {
        url : 'http://tx-bauerse.sharp-stream.com/http_live.php?i=rockklassiker_instream_se_mp3',
        title : 'Rockklassiker',
        id : 2,
    },
    {
        url : 'https://live-bauerse-fm.sharp-stream.com/lugnaklassiker_instream_se_mp3',
        title : 'Lugna Klassiker',
        id : 3,
    },
    {
        url : 'https://sverigesradio.se/topsy/direkt/2576-hi-mp3',
        title : 'Din gata',
        id : 4,
    },
];


// creating the list
(function(){
    for (let i = 0; i < radioStations.length; i++) {
        radioList.innerHTML += `<li onclick="getRadioStation('${radioStations[i].title}')">${radioStations[i].title}</li>`;
    }
})()

// Getting the correct radiostation from the list and calling on radio
function getRadioStation(title) {

    radioStations.forEach(radioStation => {
        if(radioStation.title == title) {
            let newRadio = createNewRadioStation(radioStation.id);

            audiocontainer.innerHTML = newRadio;
            radiotitle.innerHTML = radioStations[radioStation.id].title;
        }
        
    });
}

function createNewRadioStation(id) {
    return `<audio controls autoplay ><source src="${radioStations[id].url}"></audio>`;
}


