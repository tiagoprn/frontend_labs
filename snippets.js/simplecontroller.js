//Based on bootstrapping.js on this repo

// Namespaces our objects
var BestWebAppEver = BestWebAppEver || {};

// Defines our object in the namespace defined above
BestWebAppEver.Menu = (function () {
    'use strict';

    // private properties
    var menuToggle = $('#menu_toggle');
    var sidebar = $('#sidebar'); 
    var workspace = $('#workspace');

    // private methods
    function getIsActive() {
        return menuToggle.hasClass("menu-active");
    }

    function setupControllers() {
        menuToggle.on('click touchstart', function(e){
            e.preventDefault();

            menuToggle.toggleClass('menu-active');

            //var show_sidebar = $('#menu_toggle').hasClass("menu-active");
            if (getIsActive()) {
                sidebar.addClass("col-sm-3 col-md-3");
                sidebar.show();
                workspace.removeClass("col-sm-12 col-md-12");
                workspace.addClass("col-sm-9 col-md-9");
            } else {
                sidebar.removeClass("col-sm-3 col-md-3");
                sidebar.hide();
                workspace.removeClass("col-sm-9 col-md-9");
                workspace.addClass("col-sm-12 col-md-12");
            }  
        });
    }

    function init() {
        setupControllers();
    }

    // [ public methods ]
    return init();
}());