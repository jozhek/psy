// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function getClassesList(){
    return ['1а','1б','2а','2б','3а','3б','4а','4б','5а','5б','6а','6б','7а','7б','8а','8б'];
}

function getYearsList(){
    return ['2018-2019','2017-2018'];
}

function getTestsList(){
    return ['Аменито','Виено Амерата','Цветовой тест','Emberados'];
}

let $ = require('jquery');

var $classes_control = $('div.classes');
var $tests_control = $('div.select.tests');

let controls = {
    tests : $('div.select.tests'),
    years : $('div.select.years'),
    classes : $('div.classes'),
    names : $('div.names')
}

getTestsList().forEach((item,index) => {

    var span_class = '';

    if (index > 0){
        span_class = ' class="hidden"';
    }
    (controls.tests).append('<span'+span_class+'>' + item + '</span>');
});

(getYearsList()).forEach((item,index) => {
    var span_class = '';
    if (index > 0){
        span_class = ' class="hidden"';
    }
    (controls.years).append('<span'+span_class+'>' + item + '</span>');
});

(getClassesList()).forEach((item,index) => {
    (controls.classes).append('<span>' + item + '</span>');
});
