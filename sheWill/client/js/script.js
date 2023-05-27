console.log("Welcome To Spotify");

//initialise the variables
let songIndex = 0;
// let Index = 0;
let audioElement = new Audio('../static/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Heart Of The Ocean " , filePath:"../static/songs/1.mp3" , coverPath: "../static/covers/cover1.jpg"},
    {songName: "Late At Night" , filePath: "../static/songs/2.mp3" , coverPath: "../static/covers/cover1.jpg"},
    {songName: "Morning Routine" , filePath: "../static/songs/3.mp3" , coverPath: "../static/covers/cover1.jpg"},
    {songName: "Purple Cat" , filePath: "../static/songs/4.mp3" , coverPath: "../static/covers/cover1.jpg"},
    {songName: "Storm Clouds" , filePath: "../static/songs/5.mp3" , coverPath: "../static/covers/cover1.jpg"},
    {songName: "Winter Night" , filePath: "../static/songs/6.mp3" , coverPath: "../static/covers/cover1.jpg"},
    
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `../static/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
    songIndex += 1;
    }
    audioElement.src = `../static/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
    songIndex -= 1;
    }
    audioElement.src = `../static/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
