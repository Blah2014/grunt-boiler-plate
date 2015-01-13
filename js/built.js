/* gruntBoilerPlate - v0.1.0 | Copyright (C) 2015/01/13 SETLEVEL, LLC. All rights reserved.*/
$(function() {
	Model.Init();
});

var Model = (function() {

    var self = this;

    self.init = function() {
        //alert('Model Init');
    };

    return {
    	Init: self.init
    };
})();
$(function() {
	View.Init();
});

var View = (function() {

    var self = this;

    self.init = function() {
        //alert('View Init');
    };

    return {
    	Init: self.init
    };
})();
$(function() {
	Controller.Init();
});

var Controller = (function() {

    var self = this;

    self.init = function() {
        //alert('Controller Init');
    };

    return {
    	Init: self.init
    };
})();