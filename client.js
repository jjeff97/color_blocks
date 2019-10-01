let numOfBlue = 1
let numOfRed = 1
let numOfYellow = 1
let numOfGreen = 1
$(document).ready(init);

function init() {
    $('.js-container').append(`<div class="box green"></div>`)
        .append(`<div class="box blue"></div>`)
        .append(`<div class="box yellow"></div>`)
        .append(`<div class="box red"></div>`);

    $('.js-btn-blue').on('click', createBlueBox);
    $('.js-btn-red').on('click', createRedBox);
    $('.js-btn-yellow').on('click', createYellowBox);
    $('.js-btn-green').on('click', createGreenBox);


    $('.js-container').on('click', '.blue.box', deleteBlueBox);
    $('.js-container').on('click', '.red.box', deleteRedBox);
    $('.js-container').on('click', '.yellow.box', deleteYellowBox);
    $('.js-container').on('click', '.green.box', deleteGreenBox);

    $('.js-num-blue').text(numOfBlue + ' Blue Count ');
    $('.js-num-red').text(numOfRed + ' Red Count ');
    $('.js-num-yellow').text(numOfYellow + ' Yellow Count ');
    $('.js-num-green').text(numOfGreen + ' Green Count ');

}

function createBlueBox() {
    numOfBlue++;
    $('.js-num-blue').text(numOfBlue + ' Blue Count ');
    $('.js-container').append(`<div class="box blue"></div>`);
}

function createRedBox() {
    numOfRed++;
    $('.js-num-red').text(numOfRed + ' Red Count ');
    $('.js-container').append(`<div class="box red"></div>`);

}

function createYellowBox() {
    numOfYellow++;
    $('.js-num-yellow').text(numOfYellow + ' Yellow Count ');
    $('.js-container').append(`<div class="box yellow"></div>`);

}

function createGreenBox() {
    numOfGreen++;
    $('.js-num-green').text(numOfGreen + ' Green Count ');
    $('.js-container').append(`<div class="box green"></div>`);

}

function deleteBlueBox() {
    numOfBlue--;
    $('js-num-blue').empty();
    $('.js-num-blue').text(`${numOfBlue} Blue Count`);

    $(this).remove();
}

function deleteRedBox() {
    numOfRed--;
    $('js-num-red').empty();
    $('.js-num-red').text(`${numOfRed} Red Count`);
    $(this).remove();
}

function deleteYellowBox() {
    numOfYellow--;
    $('js-num-yellow').empty();
    $('.js-num-yellow').text(` ${numOfYellow} Yellow Count`);

    $(this).remove();
}

function deleteGreenBox() {
    numOfGreen--;
    $('js-num-green').empty();
    $('.js-num-green').text(` ${numOfGreen} Green Count `);

    $(this).remove();
}