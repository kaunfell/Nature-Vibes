
let headerBox = document.querySelector('.header');
let mainContainer = document.querySelector('.mainContainer');
let videoContainer = document.querySelector('.videoContainer');
let textArea = document.querySelector('.textArea');
let mainBox = document.querySelector('.mainBox');
let videoBox = document.querySelector('.videoContainer')
let musicBox = document.querySelector('.musicButton');


function musicBoxImg() {

    if(isPlaying === false){
        musicBox.style.backgroundImage="url('./resurssit/img/mute_green.png')";
        musicBox.style.backgroundRepeat = "no-repeat";
        musicBox.style.backgroundPosition= "60px 50%";


    }else{
        musicBox.style.backgroundImage="url('./resurssit/img/sound_green.png')";
        musicBox.style.backgroundRepeat = "no-repeat";
        musicBox.style.backgroundPosition= "60px 50%";
    }
}


let video = document.querySelector('.video')
let videoPlaying = false;

//create buttons 
let nextVideo = document.createElement('button');
nextVideo.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
nextVideo.classList.add("nextButton");

let previousVideo = document.createElement('button');
previousVideo.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
previousVideo.classList.add("previousButton")

//sound main page
let isPlaying = false;
const audio = new Audio('./resurssit/sound/birds.wav');


function pauseSound(){
    audio.pause();
}

function handleSound() {
    if(isPlaying === false){
        audio.play();
        isPlaying=true;
musicBoxImg();

    }else if(isPlaying=true){
        
        audio.pause();
        isPlaying = false;
        musicBoxImg();

    }

}

musicBox.addEventListener('click', handleSound);



//ADD buttons and divs
function addButtons() {
    
    mainContainer.appendChild(previousVideo);
    mainContainer.appendChild(nextVideo);
}

function addDivs() {
    const divLeft = document.createElement('div');
    divLeft.classList.add('divLeft');
    mainContainer.appendChild(divLeft);

    const divRight = document.createElement('div');
    divRight.classList.add('divRight');
    mainContainer.appendChild(divRight);
}




//check if items clicked and functions already triggered
let hasTriggered = 0;
const seasonsArray = document.querySelectorAll('a');

function check() {
if(hasTriggered === 1 ){
    addButtons();
    addDivs();
}else if(hasTriggered > 1){
    
}
}





//back to main
function reloadPage(){
    window.location.reload();
    hasTriggered = 0;
}
headerBox.addEventListener("click", reloadPage);



//spring
let springA = document.querySelector(".spring");


function springPage() {
    document.body.style.backgroundColor = "rgb(130, 168, 64)";
    headerBox.style.backgroundImage = "url('./resurssit/img/springBanner2.jpg')";
    headerBox.style.backgroundPosition = "100% 66%";
    headerBox.style.color = "rgb(52, 102, 16)";


    textArea.innerHTML=`"Spring is far more than just a changing of seasons;<br> it's a rebirth of the spirit."<br>—Toni Sorenson`;
    //musicBox.style.backgroundColor ="rgb(130, 184, 68)";
    videoContainer.style.backgroundImage = "none";
    
    //TEST
    video.addEventListener('play', pauseSound());
   

    //video
    video.controls = true;
    const videosSrc=
        [
            "./resurssit/video/spring1.mp4",
            "./resurssit/video/spring2.mp4",
        ]

        video.src = videosSrc[0];

    function loopNext() {
            for(let i=0; i<videosSrc.length; i++){
                video.src = videosSrc[i];
            }
    }
            
            
    function loopPrevious() {
            for(let i=videosSrc.length; i>=0; i--){
                video.src = videosSrc[i];
            }
    }
        nextVideo.addEventListener('click', loopNext);
        previousVideo.addEventListener('click', loopPrevious);
    ///video

    hasTriggered +=1;
    check();
}

springA.addEventListener("click", springPage);





//summer
let summerA = document.querySelector(".summer");

function summerPage() {
    document.body.style.backgroundColor = "rgb(38, 140, 50)";
    headerBox.style.backgroundImage = "url('./resurssit/img/summerBanner2.jpg')";
    headerBox.style.backgroundPosition = "100% 45%";
    headerBox.style.color = "rgb(13, 140, 25)";

    textArea.innerHTML="“I love how summer just wraps its arms around<br> you like a warm blanket.” <br>—Kellie Elmore, writer. ";
    //musicBox.style.backgroundColor ="rgb(97, 227, 80, 0.5)";
    musicBox.style.color ="rgb(32, 92, 4)";
    videoContainer.style.backgroundImage = "none";
    //video
    video.controls = true;
    const videosSrc=
        [
            "./resurssit/video/summer1.mp4",
            "./resurssit/video/summer2.mp4",
        ]

        video.src = videosSrc[0];

    function loopNext() {
            for(let i=0; i<videosSrc.length; i++){
                video.src = videosSrc[i];
            }
    }
            
            
    function loopPrevious() {
            for(let i=videosSrc.length; i>=0; i--){
                video.src = videosSrc[i];
            }
    }
        nextVideo.addEventListener('click', loopNext);
        previousVideo.addEventListener('click', loopPrevious);
    ///video



    
    hasTriggered +=1;
    check();
}

summerA.addEventListener("click", summerPage);





//Autumn
let autumnA = document.querySelector(".autumn");

function autumnPage() {
    document.body.style.backgroundColor = "rgb(201, 77, 24)";
    headerBox.style.backgroundImage = "url('./resurssit/img/autumnBanner.jpg')";
    headerBox.style.backgroundPosition = "100% 30%";
    headerBox.style.color = "rgb(201, 71, 0)";

    textArea.innerHTML=`"Autumn...the year's last, loveliest smile." <br>― John Howard Bryant, Indian Summer `;
    //musicBox.style.backgroundColor ="rgba(163, 94, 42, 0.851)";
    musicBox.style.color ="rgb(97, 57, 26)";
    videoContainer.style.backgroundImage = "none";

        //video
        video.controls = true;
        const videosSrc=
            [
                "./resurssit/video/autumn1.mp4",
                "./resurssit/video/autumn2.mp4",
            ]
    
            video.src = videosSrc[0];
    
        function loopNext() {
                for(let i=0; i<videosSrc.length; i++){
                    video.src = videosSrc[i];
                }
        }
                
                
        function loopPrevious() {
                for(let i=videosSrc.length; i>=0; i--){
                    video.src = videosSrc[i];
                }
        }
            nextVideo.addEventListener('click', loopNext);
            previousVideo.addEventListener('click', loopPrevious);
        ///video




    hasTriggered +=1;
    check();
}

autumnA.addEventListener("click", autumnPage);





//Winter
let winterA = document.querySelector(".winter");

function winterPage() {
    document.body.style.backgroundColor = "rgb(18, 100, 135)";
    headerBox.style.backgroundImage = "url('./resurssit/img/winterBanner2.jpg')";
    //for pic 1, headerBox.style.backgroundPosition = "50% 39%";
    headerBox.style.backgroundPosition = " 65%";
    headerBox.style.color = "rgb(9, 54, 112)";

    textArea.innerHTML='"What good is the warmth of summer, without <br>the cold of winter to give it sweetness. <br>- John Steinbeck, Travels with Charley:<br> In Search of America';
    //musicBox.style.backgroundColor ="rgba(24, 97, 186, 0.71)";
    musicBox.style.color = "rgb(9, 54, 112)";
    videoContainer.style.backgroundImage = "none";


    //video
    video.controls = true;
    const videosSrc=
        [
            "./resurssit/video/winter1.mp4",
            "./resurssit/video/winter2.mp4",
        ]

        video.src = videosSrc[0];

    function loopNext() {
            for(let i=0; i<videosSrc.length; i++){
                video.src = videosSrc[i];
            }
    }
            
            
    function loopPrevious() {
            for(let i=videosSrc.length; i>=0; i--){
                video.src = videosSrc[i];
            }
    }
        nextVideo.addEventListener('click', loopNext);
        previousVideo.addEventListener('click', loopPrevious);
    ///video





    hasTriggered +=1;
    check();
}

winterA.addEventListener("click", winterPage);