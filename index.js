// var elem = document.getElementById("progress");
// var width = 1;
// var id = setInterval(frame, 300);

// var play = document.getElementById('play');
// var pause = document.getElementById('pause')
// var progress = document.getElementById('progress');

// function frame() {
//   if (width < 100) {
//     ++width;
//     elem.style.width = width + '%';
//   }
//   else 
//   {
//       play.style.display = "block";
//       pause.style.display = "none";
//       progress.style.backgroundColor = "#15124b";
//   }
// }
var data = [];

window.onbeforeunload = function (e) {
  localStorage.clear();
};

var count = 0;
var count2 = 0;

function createPlaylist(obj) {
    var playlistDiv = document.createElement("div");
    playlistDiv.className = "menu-item";

    var textWrapper = document.createElement("div");
    textWrapper.className = "text-wrapper";

    var title = document.createElement("h3")
    title.innerHTML = obj.track;
    textWrapper.appendChild(title);
    
    var artist = document.createElement("h5")
    artist.innerHTML = obj.artist;
    textWrapper.appendChild(artist);
    
    var imgWrapper = document.createElement("div");
    imgWrapper.className = "img-wrapper";
    
    var image = document.createElement("img");
    image.className = "image";
    image.src = obj.albumCover;
    imgWrapper.appendChild(image);

    playlistDiv.appendChild(textWrapper);
    playlistDiv.appendChild(imgWrapper);

    playlistDiv.onclick = function() {
        myAudio.src = obj.file;
        playerThumbnail.src = obj.albumCover;
        musicName.innerHTML = obj.track;
        musicPara.innerHTML = obj.artist;
        myAudio.play();
        play.style.display = "none";
        pause.style.display = "block";
        localStorage.setItem("position", obj.id);
    }

    return playlistDiv;
}

var audio = document.getElementById("myAudio");

var play = document.getElementById('play');
var pause = document.getElementById('pause');

play.onclick = function() {
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
  }
  pause.onclick = function() {
    audio.pause();
    play.style.display = "block";
    pause.style.display = "none";
  }

    audio.ontimeupdate = function() {
      var inpercentage = (audio.currentTime/audio.duration)* 100;
      progress.style.width = inpercentage +'%';
  
      console.log(audio.ended);
  
      if(audio.ended === true) {
            var position = localStorage.getItem("position");
            if(position === undefined || position === null) {
              localStorage.setItem("position", 1);
            }
              position = localStorage.getItem("position");
              
              myAudio.src = data[position].file;
              playerThumbnail.src = data[position].albumCover;
              musicName.innerHTML = data[position].track;
              musicPara.innerHTML = data[position].artist;
              myAudio.play();
              play.style.display = "none";
              pause.style.display = "block";
              if(position < data.length-1) {
                localStorage.setItem("position", ++position);
              }
              else
              localStorage.setItem("position", 0);

              if(count2 % 2 !== 0) {
                var shufflePosition = parseInt(Math.random()*8 );
                myAudio.src = data[shufflePosition].file;
                playerThumbnail.src = data[shufflePosition].albumCover;
                musicName.innerHTML = data[shufflePosition].track;
                musicPara.innerHTML = data[shufflePosition].artist;
                myAudio.play();
                play.style.display = "none";
                pause.style.display = "block";
                localStorage.setItem("position", shufflePosition+1);
              }
       }
     }
 
// audio.ontimeupdate = function automaticPlay(mobj) {
//     var inpercentage = (audio.currentTime/audio.duration)* 100;
//     progress.style.width = inpercentage +'%';

//     console.log(audio.ended);
//     console.log(mobj);
//     // testing(audio.ended);

//     if(audio.ended === true) {
//           console.log(mobj);
//           var position = localStorage.getItem("position");
//           if(position === undefined || position === null) {
//             localStorage.setItem("position", 1);
//           }
//             position = localStorage.getItem("position");
            
//             myAudio.src = data[position].file;
//             playerThumbnail.src = data[position].albumCover;
//             musicName.innerHTML = data[position].track;
//             musicPara.innerHTML = data[position].artist;
//             myAudio.play();
//             play.style.display = "none";
//             pause.style.display = "block";
//             if(position < data.length-1) {
//               localStorage.setItem("position", ++position);
//             }
//             else
//             localStorage.setItem("position", 0);
//         }
//   }

var menuData = document.getElementById('menu');

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://5dd1894f15bbc2001448d28e.mockapi.io/playlist', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        data = JSON.parse(this.responseText);
        for(var i = 0; i<data.length; i++){
            menuData.appendChild(createPlaylist(data[i]));
        }
        // automaticPlay(data);
        // alen(data);

        // function testing(p) {
        //   console.log(p);
        //   if(p === true) {
        //   var position = localStorage.getItem("position");
        //   if(position === undefined || position === null) {
        //     localStorage.setItem("position", 1);
        //   }
        //     position = localStorage.getItem("position");
        //     myAudio.src = data[position].file;
        //     playerThumbnail.src = data[position].albumCover;
        //     musicName = data[position].track;
        //     musicPara = data[position].artist;
        //     myAudio.play();
        //     play.style.display = "none";
        //     pause.style.display = "block";
        //     if(position < data.length-1) {
        //       localStorage.setItem("position", ++position);
        //     }
        //     else
        //     localStorage.setItem("position", 0);
        // }
        // }

        // myAudio.onseeking = function() {
        //   alert("Seek began");
        // }

        next.onclick = function() {
          var position = localStorage.getItem("position");
          if(position === undefined || position === null) {
            localStorage.setItem("position", 1);
          }
            // position = localStorage.getItem("position");
            // myAudio.src = data[position].file;
            // playerThumbnail.src = data[position].albumCover;
            // musicName.innerHTML = data[position].track;
            // musicPara.innerHTML = data[position].artist;
            // myAudio.play();
            // play.style.display = "none";
            // pause.style.display = "block";
            // if(position < data.length-1) {
            //   localStorage.setItem("position", ++position);
            // }
            // else
            // localStorage.setItem("position", 0);

            if(count2 % 2 !== 0) {
              var shufflePosition = parseInt(Math.random()*8 );
              myAudio.src = data[shufflePosition].file;
              playerThumbnail.src = data[shufflePosition].albumCover;
              musicName.innerHTML = data[shufflePosition].track;
              musicPara.innerHTML = data[shufflePosition].artist;
              myAudio.play();
              play.style.display = "none";
              pause.style.display = "block";
              console.log("position =>"+position + "length=>"+data.length+ " shuffle=>" + shufflePosition);
              if(shufflePosition < data.length-1)
              localStorage.setItem("position", shufflePosition+1);
              else 
              localStorage.setItem("position", 0);
            }
            else {
              position = localStorage.getItem("position");
            // myAudio.src = data[position].file;
            // playerThumbnail.src = data[position].albumCover;
            // musicName.innerHTML = data[position].track;
            // musicPara.innerHTML = data[position].artist;
            // myAudio.play();
            // play.style.display = "none";
            // pause.style.display = "block";
            if(position < data.length-1) {
              myAudio.src = data[position].file;
              playerThumbnail.src = data[position].albumCover;
              musicName.innerHTML = data[position].track;
              musicPara.innerHTML = data[position].artist;
              myAudio.play();
              play.style.display = "none";
              pause.style.display = "block";
              localStorage.setItem("position", ++position);
            }
            else {
              myAudio.src = data[0].file;
              playerThumbnail.src = data[0].albumCover;
              musicName.innerHTML = data[0].track;
              musicPara.innerHTML = data[0].artist;
              myAudio.play();
              play.style.display = "none";
              pause.style.display = "block";
              localStorage.setItem("position", 1);
            }
            }
        }

        previous.onclick = function() {
          var position = localStorage.getItem("position");
          if(position === undefined || position === null || position === "1") {
            localStorage.setItem("position", 2);
          }
            // position = localStorage.getItem("position");
            // myAudio.src = data[position-2].file;
            // playerThumbnail.src = data[position-2].albumCover;
            // musicName.innerHTML = data[position-2].track;
            // musicPara.innerHTML = data[position-2].artist;
            // myAudio.play();
            // play.style.display = "none";
            // pause.style.display = "block";
            // if(position > 1) {
            //   localStorage.setItem("position", --position);
            // }
            // else
            // localStorage.setItem("position", 1);

            if(count2 % 2 !== 0) {
              var shufflePosition = parseInt(Math.random()*8 );
              myAudio.src = data[shufflePosition].file;
              playerThumbnail.src = data[shufflePosition].albumCover;
              musicName.innerHTML = data[shufflePosition].track;
              musicPara.innerHTML = data[shufflePosition].artist;
              myAudio.play();
              play.style.display = "none";
              pause.style.display = "block";
              localStorage.setItem("position", shufflePosition+1);
            }
            else {
              position = localStorage.getItem("position");
            myAudio.src = data[position-2].file;
            playerThumbnail.src = data[position-2].albumCover;
            musicName.innerHTML = data[position-2].track;
            musicPara.innerHTML = data[position-2].artist;
            myAudio.play();
            play.style.display = "none";
            pause.style.display = "block";
            if(position > 1) {
              localStorage.setItem("position", --position);
            }
            else
            localStorage.setItem("position", 1);
            }
        }
        
        // repeat.onclick = function() {
        //   var inPercentage = (audio.currentTime/audio.duration)* 100;
        //   var audioDuration = audio.duration*100;
        //   console.log(audioDuration);

        //   setInterval(function(){ alert("Hello"); }, audioDuration);

        //   if (inPercentage === 100) {
        //     var position = localStorage.getItem("position");
        //     if(position === undefined || position === null) {
        //       localStorage.setItem("position", 0);
        //     }
        //     position = localStorage.getItem("position");
        //     myAudio.src = data[position-1].file;
        //     playerThumbnail.src = data[position-1].albumCover;
        //     musicName = data[position-1].track;
        //     musicPara = data[position-1].artist;
        //     myAudio.play();
        //     play.style.display = "none";
        //     pause.style.display = "block";
        //   }
        // }

        repeat.onclick = function() {
          count = ++count;
          if(count % 2 == 0) {
            audio.loop = false;
            // audio.load();
            repeat.style.color = "#15124b";
            // repeat.style.fontSize = "22px";
          }
          else {
          audio.loop = true;
          // audio.load();
          // repeat.style.fontSize = "21px";
          repeat.style.color = "grey";
          console.log("clicked");
          }
        }

          shuffle.onclick = function() {
            count2 = ++count2;
            if(count2 % 2 !== 0) {
              var shufflePosition = parseInt(Math.random()*8 );
              myAudio.src = data[shufflePosition].file;
              playerThumbnail.src = data[shufflePosition].albumCover;
              musicName.innerHTML = data[shufflePosition].track;
              musicPara.innerHTML = data[shufflePosition].artist;
              myAudio.play();
              play.style.display = "none";
              pause.style.display = "block";
              localStorage.setItem("position", shufflePosition+1);
              shuffle.style.color = "grey";
            }
            else
            shuffle.style.color = "#15124b";
          }
    }
}
xhttp.send();