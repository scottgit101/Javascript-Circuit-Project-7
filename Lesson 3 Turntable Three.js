$('form').on('submit', function(e) {
  
  
    e.preventDefault();

    var userInput = $('#comment').val();

    $('input').removeClass('error');
    $('.error-message').remove();

    if (userInput === "") {
      
        $('#comment').addClass('error');
        $('#comment').after('<p class="error-message">This field is required.</p>');
      
    } 
  
    else {$('#commentList').append('<li><p>' + userInput + '</p><i class="fa fa-trash-o delete"></i></li>');}
  
  
});


$('#commentList').on('click', '.delete', function() {$(this).parent().remove();});