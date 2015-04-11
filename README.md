# jQuery Multiobserve

A jQuery extension to trigger a callback when an event has occurred across all elements of a selector.

```javascript

$('button').multiobserve({
  on : 'click',
  any : function(){
    // for any click
  },
  all : function(){
    // fires after all buttons are clicked
	// and for every click after
  }
});


```
