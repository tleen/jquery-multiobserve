(function($){
  'use strict';
  // xx - add remove/undo?

  var defaults = {
    on : '',
    any : function(){ },
    all : function(){ }
  };
  
  var MultiObserver = function(options){
    this.elements = [];
    this.observed = [];
    this.options = $.extend(true, {}, defaults, options);
  };

  MultiObserver.prototype.observe = function(element){

    this.elements.push(element);
    this.observed.push(false);
    
    var observer = this;
    $(element).on(observer.options.on, function(evt){

      observer.options.any();

      var all = true;
      for(var i = 0; i < observer.elements.length; i++){
	if(observer.elements[i] === this) observer.observed[i] = true;
	all = (all && observer.observed[i]);
      }
      if(all) observer.options.all();          
    });
  };

  // returning this for chaining, perhaps return a multiobserver with a stop/add?
  $.fn.multiobserve = function(options){
    var mo = new MultiObserver(options);
    return this.each(function(){
      mo.observe(this);
    });
  };

}(jQuery));


