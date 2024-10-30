/*!
* Highlight Permalinked Comment
* Copyright (c) Evan Solomon Tue Jan 22 2013
* Licensed GPL
*/
// Generated by CoffeeScript 1.4.0
(function() {

  (function($) {
    var comment_id, highlighter;
    comment_id = (location.hash.match(/^#comment-[0-9]+$/) || []).pop();
    if (!comment_id) {
      return;
    }
    highlighter = function() {
      var $el, origColor;
      $el = $(comment_id);
      if (!$el) {
        return;
      }
      origColor = $el.css('backgroundColor');
      return $el.css({
        backgroundColor: '#FBEAB6'
      }).animate({
        backgroundColor: origColor
      }, 2000);
    };
    return $(highlighter);
  })(jQuery);

}).call(this);
