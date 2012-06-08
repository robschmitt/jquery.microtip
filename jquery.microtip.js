$.fn.microtip = function(options) {  
  
  var defaults = {
    bg: true,
    attr: 'title',
    position: 'bottom',
    width: '',
    minWidth: 100,
    maxWidth: 175,
    textColor: '',
    offset: 8
  };
  
  var options = $.extend(defaults, options); 
  
  return this.each(function() {
    var el = $(this);
    var tipCSS = {
      'width': options.width != '' ? options.width + 'px' : '',
      'min-width': options.minWidth + "px",
      'max-width': options.maxWidth != "none" ? options.maxWidth + 'px' : '',
      'color': options.textColor.length ? options.textColor : ''
    };
    
    el
      .mouseenter(function() {
        var tip;
        if (el.hasClass("microtip-processed")) {
          tip = el.siblings("span.microtip-tip");
        }
        else {
          tip = $("<span></span>").addClass("microtip-tip").css(tipCSS);
          if (options.bg) {
            tip.addClass('bg');
          }
          var elDim = { "x": el.width(), "y": el.height() };
          tip.html(el.attr(options.attr));
          if (options.attr == "title") {
            el.attr("title", "");
          }
          el.wrap("<div/>").parent().css("position", "relative").append(tip);
          tip.css({
            bottom : options.position == "top" ? elDim.y + options.offset : (tip.outerHeight() + options.offset) * -1,
            left: Math.floor(elDim.x / 2) - Math.floor(tip.outerWidth() / 2),
          });
          tip.css({ display: "none", opacity: 1 });
          el.addClass("microtip-processed");
        }
        tip.show();
      })
      .mouseleave(function() {
        el.siblings("span.microtip-tip").hide();
      });
  });  
}; 