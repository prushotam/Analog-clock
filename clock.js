setInterval(() => {
    
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hHand.style.transform = `rotate(${hrotation}deg)`;
    mHand.style.transform = `rotate(${mrotation}deg)`;
    sHand.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);

var audio = document.createElement('audio');
    audio.setAttribute('src','tik.mp3','autoplay');
    audio.loop=true;
    audio.play(); 
    
