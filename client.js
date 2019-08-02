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

    $('.js-btn-blue').on('click', createBlueBox);
    $('.js-btn-red').on('click', createRedBox);
    $('.js-btn-yellow').on('click', createYellowBox);
    $('.js-btn-green').on('click', createGreenBox);

    $('.js-btn-deleteblue').on('click', deleteBlueBox);
    $('.js-btn-deletered').on('click', deleteRedBox);
    $('.js-btn-deleteyellow').on('click', deleteYellowBox);
    $('.js-btn-deletegreen').on('click', deleteGreenBox);



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

function createRedBox(){
    numOfRed++;
    $('.js-num-red').text(numOfRed + ' Red Count ');
    $('.js-container').append(`<div class="box red"></div>`);

}

function createYellowBox(){
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
    $('.js-num-blue').text(numOfBlue + ' Blue Count ');

    $('js-container').removeClass();
}

function deleteRedBox() {
    numOfRed--;
}

function deleteYellowBox() {
    numOfYellow--;
}

function deleteGreenBox() {
    numOfGreen--;
}