// App js
(function() {

  /* EVENTS */
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

  $('#chatModule #preChatStateLocation').on('change', function(e){
    e.preventDefault();
    $(this).removeClass('focus');
    if($(this).val() === "California"){
      $(this).addClass('focus');
      $(this).parent().removeClass('error');
      $(this).siblings('.errorMessage').addClass('hidden');
      $('#chatModule .preChatSurvey select.formField').css({'backgroundPosition':'214px 40px'})

      addWherePhonePurchasedField();
    }
  })

  /* FORM VALIDATION */
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

    // if pass all validation redirect to phone agent
    if( !($('.errorMessage').is(':visible')) ){
      $('.routes').hide();
      $('.preChatSurvey').hide();
      $('.footer').css({marginTop:"563px"});
      $('#chatModule .title').text('Congratulations!! You have reached the chat agent.')
    }
  }

  function validateFullName(element){
    // test for space between two letters
    var value = element.val().trim();
    if( !(value.match(' ')) ){
      element.css({'backgroundPosition':'7px 7px, 214px 7px'});
      showChatErrorMessage(element);
    }
  }

  function validatePhoneNumber(element){
    var value = element.val();
    // enforces xxx-xxx-xxxx numbers format
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ](\d{3})[- ](\d{4})$/;
    if( !(phoneNumberPattern.test(value)) ){
      element.css({'backgroundPosition':'7px 7px, 214px 7px'});
      showChatErrorMessage(element);
    }
  }

  function validateStateLocation(element){
    var value = element.val();
    if( value === null ){
      element.css({'backgroundPosition':'214px 7px'});
      showChatErrorMessage(element);
    }
  }

  function validateDescribeQuestion(element){
    var value = element.val().trim();
    if( value === ""){
      element.css({'backgroundPosition':'214px 7px'});
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
    $('#chatModule .preChatSurvey input.formField').css({'backgroundPosition':'7px 7px, 214px 40px'})
    $('#chatModule .preChatSurvey select.formField').css({'backgroundPosition':'214px 40px'})
    $('#chatModule .preChatSurvey textarea.formField').css({'backgroundPosition':'7px 7px, 214px 40px'})
  }

  function addWherePhonePurchasedField(){
    var templateHtml = 
      '<div class="phonePurchased">\
        <div class="label">Was your phone purchased in CA?*</div>\
        <div class="select-style">\
          <select class="formField" id="preChatPhonePurchased">\
            <option selected disabled hidden style="display: none" value="">Select one</option>\
            <option value="yes">Yes</option>\
            <option value="no">No</option>\
          </select>\
          <div class="errorMessage hidden">State is a required field.</div>\
        </div>\
      </div>';

    $('#chatModule').css({'height': '708px'});
    $('#chatModule .state').after(templateHtml);
    setEventsForDynamicContent();
  }

  function setEventsForDynamicContent(){
    $('#chatModule #preChatPhonePurchased').on('change', function(e){
      e.preventDefault();
      $(this).removeClass('focus');
      if($(this).val() === "yes"){
        $(this).addClass('focus');
      }
    })
  }

})();
