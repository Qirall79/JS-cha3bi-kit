const keys = document.querySelectorAll(".key");

//Add click event to each of the keys
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const songName = e.target.dataset.key;
    const song = document.querySelector(`audio[data-key="${songName}"]`);
    const audios = document.querySelectorAll("audio");

    //stop any playing audio before playing the recently clicked one
    audios.forEach((audio) => {
      audio.pause();
    });

    //remove the "playing" class from the previously playing audio
    keys.forEach((k) => k.classList.remove("playing"));

    //play the clicked audio
    song.play();

    //add the "playing" class to the clicked audio
    document
      .querySelector(`.key[data-key="${songName}"]`)
      .classList.add("playing");
  });
});
