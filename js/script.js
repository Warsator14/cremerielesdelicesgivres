document.querySelectorAll('.carte1').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant1').style.display = 'flex';
    });
});

document.querySelectorAll('.carte2').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant2').style.display = 'flex';
    });
});

document.querySelectorAll('.carte3').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant3').style.display = 'flex';
    });
});

document.querySelectorAll('.carte4').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant4').style.display = 'flex';
    });
});

document.querySelectorAll('.carte5').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant5').style.display = 'flex';
    });
});

document.querySelectorAll('.carte6').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant6').style.display = 'flex';
    });
});

document.querySelectorAll('.carte7').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant7').style.display = 'flex';
    });
});

document.querySelectorAll('.carte8').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant8').style.display = 'flex';
    });
});

document.querySelectorAll('.carte9').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant9').style.display = 'flex';
    });
});

document.querySelectorAll('.carte10').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant10').style.display = 'flex';
    });
});

document.querySelectorAll('.carte11').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant11').style.display = 'flex';
    });
});

document.querySelectorAll('.carte12').forEach(carte => {
    carte.addEventListener('click', () => {
        document.querySelector('.fondTransparant12').style.display = 'flex';
    });
});






document.querySelectorAll('.x').forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.target.closest('.fondTransparant1, .fondTransparant2, .fondTransparant3, .fondTransparant4, .fondTransparant5, .fondTransparant6, .fondTransparant7, .fondTransparant8, .fondTransparant9, .fondTransparant10, .fondTransparant11, .fondTransparant12').style.display = 'none';
    }); 
});