var main = function() {
  $('form').submit(function() {
    
    var comment === $('input:comment').val();
    //save input val in comment variable
    if(comment !== "") {
      var html = $('<li>').text(comment).prependTo('.comments');
      //if its not empty make it a li and put it in .comments class
    }

    return false;
  });
};

$(document).ready(main);