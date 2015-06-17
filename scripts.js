// Select Drum Kit

$(document).ready(function(){

	// Selects numbers 1, 2 or 3
	
    $("#up").on('click',function(){
        $("#incdec input").val(parseInt($("#incdec input").val())+1);
    });

    $("#down").on('click',function(){
        $("#incdec input").val(parseInt($("#incdec input").val())-1);
    });

    $("#incdec input").attr({
       "max" : 3,
       "min" : 1
    });

    // Drum Kits
    	
    var Roland_TR_808 = {
    	"1": "Roland TR-808/TR-808Kick09.mp3",
    	"2": "Roland TR-808/TR-808Kick15.mp3",
    	"3": "Roland TR-808/TR-808Snare02.mp3",
    	"4": "Roland TR-808/TR-808Snare09.mp3",
    	"5": "Roland TR-808/TR-808Ride01.mp3",
    	"6": "Roland TR-808/TR-808Ride02.mp3",
    	"7": "Roland TR-808/TR-808Hat_C01.mp3",
    	"8": "Roland TR-808/TR-808Hat_C05.mp3",
    	"9": "Roland TR-808/TR-808Hat_O03.mp3",
    	"10": "Roland TR-808/TR-808Clap01.mp3",
    	"11": "Roland TR-808/TR-808Clap02.mp3",
    	"12": "Roland TR-808/TR-808Ride01.mp3",
    	"13": "Roland TR-808/TR-808Conga01.mp3",
    	"14": "Roland TR-808/TR-808Tom03.mp3",
    	"15": "Roland TR-808/TR-808Tom06.mp3",
    	"16": "Roland TR-808/TR-808Cow.mp3"
    };

    var Old_School_Hip_Hop = {
    	"1": "Old School Hip-Hop/B83-KIK.mp3",
    	"2": "Old School Hip-Hop/CEP-KIK.mp3",
    	"3": "Old School Hip-Hop/B83-KIK.mp3",
    	"4": "Old School Hip-Hop/CHAN-KIK.mp3",
    	"5": "Old School Hip-Hop/CLGY-KIK.mp3",
    	"6": "Old School Hip-Hop/DIR-KIK.mp3",
    	"7": "Old School Hip-Hop/B83-SN.mp3",
    	"8": "Old School Hip-Hop/CEP-SN.mp3",
    	"9": "Old School Hip-Hop/CHAN-SN.mp3",
    	"10": "Old School Hip-Hop/CLGY-SN.mp3",
    	"11": "Old School Hip-Hop/DIR-SN.mp3",
    	"12": "Old School Hip-Hop/B83-HAT.mp3",
    	"13": "Old School Hip-Hop/CEP-HAT.mp3",
    	"14": "Old School Hip-Hop/CHAN-HAT.mp3",
    	"15": "Old School Hip-Hop/DIR-HAT.mp3",
    	"16": "Old School Hip-Hop/DRO-HAT.mp3"
    };

    var Jazz_Funk_Kit = {
    	"1": "Jazz Funk Kit/kick - snares off - 1.mp3",
    	"2": "Jazz Funk Kit/kick - snares off - 2.mp3",
    	"3": "Jazz Funk Kit/snare - snares on - 1.mp3",
    	"4": "Jazz Funk Kit/kick - snares off - 1.mp3",
    	"5": "Jazz Funk Kit/snare - snares on - 2.mp3",
    	"6": "Jazz Funk Kit/hihat - closed - 1.mp3",
    	"7": "Jazz Funk Kit/hihat - closed - 2.mp3",
    	"8": "Jazz Funk Kit/rimshot - snares off - 1.mp3",
    	"9": "Jazz Funk Kit/stickshot - snares off - 1.mp3",
    	"10": "Jazz Funk Kit/ride - 1.mp3",
    	"11": "Jazz Funk Kit/ride - bell - 1.mp3",
    	"12": "Jazz Funk Kit/ride - crash - 1.mp3",
    	"13": "Jazz Funk Kit/floor tom - snares off - 1.mp3",
    	"14": "Jazz Funk Kit/floor tom - snares off - 2.mp3",
    	"15": "Jazz Funk Kit/flat ride - crash - 2.mp3",
    	"16": "Jazz Funk Kit/flat ride - crash - 1.mp3"
    };

    // Translate number into Drum Kit name

    var drumKitLabel = "Roland_TR_808";
    var drumKit = Roland_TR_808;

    $('.arrow').on('click',function(){

    	var inputValue = $("#incdec input").val();
    	inputValue = parseInt(inputValue);

	    if (inputValue === 1) {
			drumKitLabel = "Roland_TR_808";
			drumKit = Roland_TR_808;
		} else if (inputValue === 2) {
			drumKitLabel = "Old_School_Hip_Hop";
			drumKit = Old_School_Hip_Hop;
		} else if (inputValue === 3) {
			drumKitLabel = "Jazz_Funk_Kit";
			drumKit = Jazz_Funk_Kit;
		}

		// Add Selected Drum Kit Name to Screen

		var drumKitTitle = $('<h1>').text(drumKitLabel);
		$('.innerScreen h1').html(drumKitTitle);

		// Add Selected Drum Kit audio tags

		$('.audiotags').empty();

		for (sound in drumKit) {
			var src = drumKit[sound];
			// Creates audio element
			var player = $('<audio>').addClass(sound).attr('src', src);
			$('.audiotags').prepend(player);
		}

	});

// Add Default Drum Kit Name to Screen

var drumKitTitle = $('<h1>').text(drumKitLabel);
$('.innerScreen h1').html(drumKitTitle);



// Create default audio files on page load

for (sound in Roland_TR_808) {
	var src = Roland_TR_808[sound];
	// Creates audio element
	var player = $('<audio>').addClass(sound).attr('src', src);
	$('body').append(player);
}

// Trigger a arrow up click on keydown

$(document).on('keydown',function(e){
        if (e.keyCode === 38) {
        	$('.arrow-up').trigger('click');
        } else if (e.keyCode === 40) {
        	$('.arrow-down').trigger('click');
        }
      });

$(document).on('keydown',function(e){
        // Select the button with that key stored in data
        var $button  = $('[data-key*="'+e.keyCode+'"]');
        // Trigger a fake click
        $button.trigger('click');
      });

// Trigger a button click on keydown

$(document).on('keydown',function(e){
        // Select the button with that key stored in data
        var $button  = $('[data-key*="'+e.keyCode+'"]');
        // Trigger a fake click
        $button.trigger('click');
      });

// Play audio on button click

$('.button').on('click', function(){

	// Plays sample
	var sound = $(this).data('sound');
	var audio = $('audio')[0];
	var player = $('audio.'+sound)[0]
	player.currentTime = 0;
	player.play();

	// Adds default sample name to screen
	var title = $('<h2>').text(Roland_TR_808[sound]);
	$('.innerScreen h2').html(title);

	// Adds sample name to screen
	
	var title = $('<h2>').text(drumKit[sound]);

	$('.innerScreen h2').html(title);

// Volume Control

    

    $('.volume').on('change', function() {
        var volume = $(".volume").val();
        $('audio').prop("volume", volume);
        console.log(volume);
    });

});

}); // End of document ready