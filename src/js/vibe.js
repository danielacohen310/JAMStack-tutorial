const vibes = [
    '...and you are awesome!',
    '...and you are cool!',
    '...and you are fine!',
    '...and you are sweet!',
]

var vibe = vibes[Math.floor(Math.random()* Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);