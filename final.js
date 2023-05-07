const songs = [
    {
      title: "Love Story",
      lyrics: "We were both young when I first saw you. I close my eyes and the flashback starts. I'm standing there on a"
    },
    {
      title: "Blank Space",
      lyrics: "Nice to meet you, where you been? I could show you incredible things. Magic, madness, heaven, sin."
    },
    {
      title: "You Belong With Me",
      lyrics: "You're on the phone with your girlfriend, she's upset. She's going off about something that you said. 'Cause "
    },
    {
      title: "Shake It Off",
      lyrics: "I stay out too late, got nothing in my brain. That's what people say, that's what people say. I go on too man"
    },
    {
      title: "Wildest Dreams",
      lyrics: "He said, 'Let's get out of this town, drive out of the city, away from the crowds.' I thought heaven can't"
    },
    {
        title: "The Archer",
        lyrics: "I've been the prey. Who could ever leave me, darling? But who could stay?"
    },
    {
        title: "Enchanted",
        lyrics: "This is me praying that. This was the very first page. Not where the story line ends"
    },
    {
        title: "Clean",
        lyrics: "When I was drowning, that's when I could finally breathe. And by morning, gone was any trace of you"
    },
    {
        title: "New Years Day",
        lyrics: "Hold on to the memories, they will hold on to you.And I will hold on to you. Please don't ever become a stranger. Whose laugh I could recognize anywhere"
    },
    {
        title: "State of Grace",
        lyrics: "Love is a ruthless game unless you play it good and right"
    },
    {
        title: "Out of the Woods",
        lyrics: "Remember when you hit the brakes too soon? Twenty stitches in the hospital room"
    },
    {
        title: "Mary's Song (Oh My My My)",
        lyrics: "Take me back to the house in the backyard tree. Said you'd beat me up, you were bigger than me"
    },
    {
        title: "Delicate",
        lyrics: "My reputation's never been worse, so you must like me for me"
    },
    {
        title: "Red",
        lyrics: "Loving him is like driving a new Maserati down a dead-end street"
    },
    {
        title: "Haunted",
        lyrics: "Something keeps me holding onto nothing. I know I should, but I just can't let it go"
    },
    {
        title: "Willow",
        lyrics: "But I come back stronger than a 90's trend"
    },
    {
        title: "The Last Great American Dynasty",
        lyrics: "There goes the loudest woman this town has ever seen. I had a marvelous time ruining everything"
    },
    {
        title: "My Tears Ricochet",
        lyrics: "And I can go anywhere I want, anywhere I want. Just not home"
    },



    

    
  ];
  
  // Select the HTML elements
  const lyricsEl = document.querySelector('.lyrics');
  const guessEl = document.querySelector('#guess');
  const submitBtn = document.querySelector('#submit');
  const messageEl = document.querySelector('.message');
  
  // Generate a random number to select a song from the array
  let randomNum = Math.floor(Math.random() * songs.length);
  let selectedSong = songs[randomNum];
  
  // Set the lyrics of the selected song
  lyricsEl.innerHTML = selectedSong.lyrics;
  
  // Add event listener to the submit button
  submitBtn.addEventListener('click', function() {
    let guess = guessEl.value.toLowerCase();
    let correctAnswer = selectedSong.title.toLowerCase();
    
    // Check if the user's guess is correct
    if (guess === correctAnswer) {
      messageEl.innerHTML = "Congratulations! You guessed it right! Certified Swiftie";
      messageEl.style.color = "#7FFF00"; // Green color for correct answer
    } else {
      messageEl.innerHTML = "Sorry, wrong answer. Please try again. Not a certified Swifitie";
      messageEl.style.color = "#FF0000"; // Red color for wrong answer
    }
  
    // Generate a new song for the user to guess
    randomNum = Math.floor(Math.random() * songs.length);
    selectedSong = songs[randomNum];
    lyricsEl.innerHTML = selectedSong.lyrics;
    guessEl.value = "";
  });