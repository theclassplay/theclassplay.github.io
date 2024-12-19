function cloackTab(){
   $('#title').html('Home');
   $("#favicon").attr("href","/img/gclassroom.png");
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});

function openGame() {
    var win = window.open()
    var url = "https://easysciencetools.github.io"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.src = url
    win.document.body.style.margin = "0";
    win.document.body.appendChild(iframe)
}

function pickRandomGame() {
    const gameCards = document.querySelectorAll('.game-card');
    if (gameCards.length === 0) {
        alert('No games available to pick from!');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * gameCards.length);
    const selectedGame = gameCards[randomIndex];

    const gameName = selectedGame.querySelector('.game-title-overlay').textContent;
    const gameImageSrc = selectedGame.querySelector('img').src;

    const launchScreen = document.getElementById('launchScreen');
    const overlay = document.querySelector('.overlay');
    const content = document.querySelector('.content');
    const gameImage = document.getElementById('gameImage');
    const gameNameSpan = document.getElementById('gameName');

    gameImage.src = gameImageSrc;
    gameNameSpan.textContent = gameName;
    
    // Fade in the overlay and content
    launchScreen.style.visibility = 'visible';
    launchScreen.style.opacity = '1';
    overlay.style.opacity = '1';
    content.style.opacity = '1';

    setTimeout(() => {
        window.location.href = selectedGame.querySelector('a').href;
    }, 3000);
     
}    


function cloackTab(){
    $('#title').html('Home');
    $("#favicon").attr("href","/img/gclassroom.png");
 };


function filterGames() {
  const searchTerm = document.getElementById("gameSearch").value.toLowerCase();
  const gameCards = document.querySelectorAll(".game-card");
  let hasVisibleGames = false;

  gameCards.forEach(gameCard => {
      const gameTitle = gameCard.querySelector(".game-title-overlay span").textContent.toLowerCase();
      
      if (gameTitle.includes(searchTerm)) {
          gameCard.style.display = "block";
          hasVisibleGames = true;
      } else {
          gameCard.style.display = "none";
      }
  });


  const noGames = document.getElementById("noGames");
  if (hasVisibleGames) {
      noGames.style.display = "none";
  } else {
      noGames.style.display = "block";
  }
}