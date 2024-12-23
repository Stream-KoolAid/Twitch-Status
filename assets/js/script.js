/*╔══════════════╗*/
/*║  PARAMETERS  ║*/
/*╚══════════════╝*/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const gameId = urlParams.get('gameId') || '404_boxart';
const gameTitle = urlParams.get('gameTitle') || 'Game Title';
const streamTitle = urlParams.get('streamTitle') || 'Stream Title';

const boxArtUrl = `https://static-cdn.jtvnw.net/ttv-static/${gameId}.jpg`;

document.getElementById('boxArt').src = boxArtUrl;
document.getElementById('gameTitle').textContent = gameTitle;
document.getElementById('streamTitle').textContent = streamTitle;
