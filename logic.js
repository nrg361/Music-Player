let track=document.createElement("audio");

index = 0;
ltrs = 0;
playing_song=false;
auto=0;

songslist=[{
    name: "Raabta",
    location: "song1.mp3",
    singer: "Arijit Singh",
    img: "songa.jpg"
},
{
    name: "Tera Ban Jaunga",
    location: "song2.mp3",
    singer: "Tulsi Kumar",
    img: "songb.jpg"
},
{
    name: "Girl I Need You",
    location: "song3.mp3",
    singer: "Arijit Singh",
    img: "songc.jpg"
},
{
    name: "Tujhe Kitna Chahien Aur Hum",
    location: "song4.mp3",
    singer: "Jubin Nautiyal",
    img: "songd.jpg"
},
{
    name: "Makhna",
    location: "song5.mp3",
    singer: "Arijit Singh",
    img: "songe.jpg"
},
{
    name: "Girls Like You",
    location: "song6.mp3",
    singer: "Maroon 5",
    img: "songf.jpg"
}]

function autoplay(){
    if(auto) auto=0,autop.style.background="rgb(162, 223, 101)";
    else auto=1,autop.style.background="rgb(138, 101, 223)";
}

function loadt(index){
    track.src=songslist[index].location;
    title.innerHTML=songslist[index].name;
    image.src=songslist[index].img;
    artist.innerHTML=songslist[index].singer;
    track.load();
    setInterval(seeker, 1000);
}
loadt(index);


function backward(){
    if(index) index--; else index=5;
    loadt(index);
    playing_song=false;
    play();
    track.autoplay = false;
}
function forward(){
    if(index==songslist.length-1) index=0; else index++;
    loadt(index);
    playing_song=false;
    play();
    
}
function play(){
    //console.log("Hit me up"); 
    if(playing_song){
        playing_song=false;
        track.pause();
        playthis.innerHTML='<i class="fas fa-play"></i>';
        
    }
    else{
        playing_song=true;
        track.play();
        playthis.innerHTML='<i class="fas fa-pause"></i>';
        
    }
}

function mute(){
    if(track.muted) track.muted=false,mutes.innerHTML='<i class="fas fa-volume-mute"></i>',vol.value=(track.volume)*100;
    else track.muted=true,mutes.innerHTML='<i class="fas fa-volume-off"></i>',vol.value=0;
    volval.innerHTML=vol.value;
}


function loop(){
    if(track.loop) track.loop=false,loops.style.background="rgb(138, 101, 223)";
    else track.loop=true,loops.style.background="rgb(162, 223, 101)";
}

function setvolume(){
    track.volume=(vol.value)/100;
    if(track.volume) mutes.innerHTML='<i class="fas fa-volume-mute"></i>'
    else mutes.innerHTML='<i class="fas fa-volume-off"></i>';
    volval.innerHTML=vol.value;
}

function setduration(){
    track.currentTime=(track.duration*dur.value)/100;
}
function autoplay(){
    if(auto) auto=0,autop.style.background="rgb(138, 101, 223)";
    else auto=1,autop.style.background="rgb(162, 223, 101)";
}

function seeker() {
    dur.value=(track.currentTime*100)/track.duration;
    strtmin.innerHTML=Math.floor(track.currentTime/60);strtsec.innerHTML=Math.floor(track.currentTime%60);
    endmin.innerHTML=Math.floor(track.duration/60);endsec.innerHTML=Math.floor(track.duration%60);
    if(track.ended) playthis.innerHTML='<i class="fas fa-play"></i>';
    if(track.ended && auto) forward();
}

setInterval(anmtn, 250);

function anmtn() {
    if (track.currentTime > 0 && playing_song && track.currentTime<track.duration) {
        if (title.innerHTML == songslist[index].name) title.innerHTML = songslist[index].name[0], ltrs=1;
        else {
            title.innerHTML += songslist[index].name[ltrs];
            ltrs++;
            if (ltrs > songslist[index].name.length) title.innerHTML = songslist[index].name[0], ltrs = 1;
        }
        
    }
    else title.innerHTML = songslist[index].name,ltrs=0;
}
