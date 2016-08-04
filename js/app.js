// App js
(function() {

  $('.billPayments').on('click', function(e){
    e.preventDefault();
    $('.routes').hide();
    $('#chatModule').css({'height': '623px'})
    $('.preChatSurvey').removeClass('hidden')
  })

})();
