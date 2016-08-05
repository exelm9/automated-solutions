// App js
(function() {

  $('#chatModule .billPayments').on('click', function(e){
    e.preventDefault();
    $('#chatModule .routes').hide();
    $('#chatModule').css({'height': '623px'});
    $('#chatModule .preChatSurvey').removeClass('hidden');
  })

  $('#chatModule #startChat img').on('click', function(e){
    e.preventDefault();
    formValidation();
  })

  function formValidation(){
    clearErrors();

    $('#chatModule .formField').each(function(e){
      var formItem = $(this);
      var formItemId = $(this).attr('id');

      if(formItemId === "preChatFullName"){
        validateFullName(formItem);
      }else if(formItemId === "preChatMobilePhoneNumber"){
        validatePhoneNumber(formItem)
      }else if(formItemId === "preChatStateLocation"){
        validateStateLocation(formItem);
      }else if(formItemId === "preChatDescribeQuestion"){
        validateDescribeQuestion(formItem);
      }
    })

    if( $('.errorMessage').is(':visible') ){
      console.log('error')
    }
  }

  function validateFullName(element){
    // test for space between two letters
    var value = element.val().trim();
    if( !(value.match(' ')) ){
      showChatErrorMessage(element);
    }
  }

  function validatePhoneNumber(element){
    var value = element.val();
    // enforces xxx-xxx-xxxx numbers format
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ](\d{3})[- ](\d{4})$/;
    if( !(phoneNumberPattern.test(value)) ){
      showChatErrorMessage(element);
    }
  }

  function validateStateLocation(element){
    var value = element.val();
    if( value === null ){
      showChatErrorMessage(element);
    }
  }

  function validateDescribeQuestion(element){
    var value = element.val().trim();
    if( value === ""){
      showChatErrorMessage(element);
    }
    
  }

  function showChatErrorMessage(element){
    element.parent().addClass('error');
    element.siblings('.errorMessage').removeClass('hidden');
  }

  function clearErrors(){
    $('#chatModule .errorMessage').addClass('hidden');
    $('#chatModule .preChatSurvey .formField').parent().removeClass('error');
  }

})();
