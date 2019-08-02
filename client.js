 let numOfBlue = 0
 let numOfRed = 0
 let numOfYellow = 0
 let numOfGreen = 0
$(document).ready(init);

function init() {
    $('.js-container').append(`<div class="box green"></div>`)
        .append(`<div class="box blue"></div>`)
        .append(`<div class="box yellow"></div>`)
        .append(`<div class="box red"></div>`);
        
    
    $('.js-container').on('click','.js-btn-blue',newBox);
    $('.js-container').on('click','.js-btn-red', newBox);
    $('.js-container').on('click','.js-btn-green', newBox);
    $('.js-container').on('click','.js-btn-yellow', newBox );
    $('.js-blue-num').text(numOfBlue + ' Blue Count ');
    $('.js-red-num').text(numOfRed + ' Red Count ');
    $('.js-yellow-num').text(numOfYellow + ' Yellow Count ');
    $('.js-green-num').text(numOfGreen + ' Green Count ');

}

function newBox(){
    $('.js-container').append(`<div class="box green"></div>`);

}

