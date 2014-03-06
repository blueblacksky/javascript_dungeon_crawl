
//function for playing sound effects
function playSound(sound)
{
	var audioSrc = sound;
	var audio = $("#audio_container");
	audio.src = audioSrc;
	audio.play();
}

//function for playing music
function playMusic(music)
{
	$("#music_container").src = music;
	$("#music_container").play;
}

//function for stopping music
function stopMusic()
{
	var music = $("#music_container");
	music.pause();
}