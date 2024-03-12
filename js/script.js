'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const startCards = require('./modules/startCards'),
          scroll = require('./modules/scroll'),
          popup = require('./modules/popup'),
          partnersCards = require('./modules/partnersCards'),
          menuConstructorF = require('./modules/menuConstructorF'),
          form = require('./modules/form');

    startCards();
    scroll();
    popup();
    partnersCards();
    menuConstructorF();
    // form();
});
