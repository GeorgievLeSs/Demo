
$(document).ready(function () {

    var formID;

    $('.showCalendar').on('click', function() {

          $('.calendar').show();
    });

  var years = moment().diff(moment(), '');

    $('.calendar').pignoseCalendar();

    // var startDate = moment() - 18*12*30*24*60*60*1000;
    $('.calendar').pignoseCalendar({

      // en, ko, fr, ch, de, jp, pt
      lang: 'en',
      date: moment(moment().add(-18, 'years')),
      // date: startDate,

      // light, dark
      theme: 'light',

      // date format
      format: 'YYYY-MM-DD',

      // CSS class array
      classOnDays: [],

      // array of enabled dates
      enabledDates: [],

      // disabled dates
      disabledDates: [],

      // You can disable by using a weekday number array (This is a sequential number start from 0 [sunday]).
      disabledWeekdays: [],

      // enable multiple date selection
      multiple: false,

      // use toggle in the calendar
      toggle: false,

      // shows buttons
      buttons: false,

      // reverse mode
      reverse: false,

      // display calendar as modal
      modal: false,

      // add button controller for confirm by user
      buttons: false,

      // maximum disable date range by 'YYYY-MM-DD' formatted string
      maxDate: moment().add(-18, 'years'),

      // called when you select a date on calendar (date click).
      select: function (date) {

        var userDate = date[0].format('YYYY-MM-DD');

        $('.showCalendar').val(userDate);

        $('.calendar').hide();
      },
      //
      // // called when you apply a date on calendar. (OK button click).
      // apply: function (){},
    });


  // for inputs out of Form - sessionStorage

  var setElementValue;

  $('input, select').click( function(e){
      setElementValue = e.currentTarget.name;
          $(this).on("change",function () {
              sessionStorage.setItem((setElementValue+setElementValue), this.value);
          });
      });

  var getElementValue;

  $('input, select').each(function() {
       getElementValue = $(this).attr("name");
          if (sessionStorage.getItem(getElementValue+getElementValue)) {
              $(this).val(sessionStorage.getItem(getElementValue+getElementValue));
          };
  });

    $("select").change( function(){
        var second = ["0", "1"];
        var leaveHere = +$('select[name=MonthsSinceLivingHere]').val() + +$('select[name=YearsSinceLivingHere]').val() * 12;
        var leaveHere1 = +$('select[name=MonthsSinceLivingHere]').val() + +$('select[name=YearsSinceLivingHere]').val() * 12 + +$('select[name=MonthsSinceLivingHere1]').val()
            + +$('select[name=YearsSinceLivingHere1]').val() * 12;
        if (($('select[name=MonthsSinceLivingHere]').val() != "") && ( leaveHere <= 36 )){

            $("#secondAddress").show('slow');

        } else {

            $("#secondAddress").hide('slow');
        }
        if (($('select[name=MonthsSinceLivingHere1]').val() != "") && ( leaveHere1 <= 36 )){

            $("#thirdAddress").show('slow');

        } else {

            $("#thirdAddress").hide('slow');
        }
        if (($('select[name=MonthsWithEmployer]').val() != "") && ($.inArray( $('select[name=YearsWithEmployer]').val(), second ) > -1)){

            $("#secondEmployement").show('slow');

        } else {

            $("#secondEmployement").hide('slow');
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Please, fill this field.",
        remote: "Please take attention at this field.",
        email: "It's not a valid email address.",
        date: "Something is wrong with date.",
        number: "It's not a number.",
        digits: "There must be only digits.",
        maxlength: jQuery.validator.format("Please enter no more than 0 characters."),
        minlength: jQuery.validator.format("Please enter at least 2 characters."),
        rangelength: jQuery.validator.format("Please enter a value between 0 and 1 characters long."),
        range: jQuery.validator.format("Please enter a value between 0 and 1."),
        max: jQuery.validator.format("Please enter a value less than or equal to 0."),
        min: jQuery.validator.format("Please enter a value greater than or equal to 0.")
    });
    $.validator.setDefaults({
        onkeyup: false,
        ignore: [],
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors > '1') {
                var ErrMsg = 'fields';
            }
            if (errors === '1') {
                var ErrMsg = 'field';
            }
            var ErrMsg1 = validator.errorList[0].message;
            if (errors) {
                validator.errorList[0].element.focus();
            }
        },
        rules: {
            First_Name: {required: true, letters: true, minlength: 2},
            Last_Name: {required: true, letters: true, minlength: 2},
            City: {required: true},
            Country: {required: true},
            Salutation: {required: true},
            FirstName: {required: true, letters: true, minlength: 2},
            Surname: {required: true, letters: true, minlength: 2},
            DateOfBirth: {required: true},
            EmailAddress: {required: true, email: true},
            Telephone: {required: true, UKmobile: true},
            MaritalStatus: {required: true},
            LicenceType: {required: true},
            PostalCode: {required: true, UKpostcode: true},
            Street: {required: true},
            TownCity: {required: true},
            County: {required: true},
            HouseNo: {required: true},
            ResidentialStatus: {required: true},
            MonthsSinceLivingHere: {required: true},
            YearsSinceLivingHere: {required: true},
            PostalCode1: {required: true},
            Street1: {required: true},
            TownCity1: {required: true},
            County1: {required: true},
            HouseNo1: {required: true},
            ResidentialStatus1: {required: true},
            MonthsSinceLivingHere1: {required: true},
            YearsSinceLivingHere1: {required: true},
            PostalCode2: {required: true, UKpostcode: true},
            Street2: {required: true},
            TownCity2: {required: true},
            County2: {required: true},
            HouseNo2: {required: true},
            ResidentialStatus2: {required: true},
            MonthsSinceLivingHere2: {required: true},
            YearsSinceLivingHere2: {required: true},
            Occupation: {required: true},
            Employer: {required: true},
            EmploymentStatus: {required: true},
            AddressNameNumber: {required: true},
            Street3: {required: true},
            TownCity3: {required: true},
            PostalCode3: {required: true, UKpostcode: true},
            County3: {required: true},
            TakeHomePay: {required: true},
            PaymentFrequency: {required: true},
            MonthsWithEmployer: {required: true},
            YearsWithEmployer: {required: true},
            Occupation1: {required: true},
            Employer1: {required: true},
            EmploymentStatus1: {required: true},
            AddressNameNumber1: {required: true},
            Street4: {required: true},
            TownCity4: {required: true},
            PostalCode4: {required: true, UKpostcode: true},
            County4: {required: true},
            TakeHomePay1: {required: true},
            PaymentFrequency1: {required: true},
            MonthsWithEmployer1: {required: true},
            contact_name: {required: true},
            contact_email: {required: true, email: true},
            contact_content: {required: true},
            YearsWithEmployer1: {required: true}
        },
        highlight: function (element) {
            $(element).closest('input, select').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('input, select').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('fieldset').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#firstApply").validate({

        ignore: ":hidden",

        submitHandler: function () {

            window.location = 'quote';
        }
    });

    $("#applyFirst").click(function () {

        event.preventDefault();

        $("#firstApply").submit();
    });

    $("#applyForm").validate({

        ignore: ":hidden",

        submitHandler: function () {

            setTimeout(function () {

                var product_fields = $("#applyForm").serializeArray();

                $("#applyForm").trigger('reset');

                $.ajax({
                    url: 'php/send.php',
                    data: product_fields,
                    type: 'POST',
                    async: false,
                    success: function () {

                        window.location = 'thank_you';

                        sessionStorage.clear();
                    }
                });
            }, 2000);

        }
    });

    $("#apply").click(function () {

        event.preventDefault();

        $("#applyForm").submit();
    });

    $("#contactForm").validate({

        submitHandler: function () {

            var product_fields = $("#contactForm").serializeArray();

            $("#contactForm").trigger('reset');

            $.ajax({url: 'libs/contact_send_email.php',
                data: product_fields,
                type: 'POST',
                async: false,
                success: function () {
                    alert('Ho - Ho - Ho');
                }
            });
        }
    });

    $("#contactSend").unbind('click').click(function () {

        event.preventDefault();

        $("#contactForm").submit();

    });

        $('#simplePHP').validate({

            submitHandler: function () {

                setTimeout(function () {

                    var product_fields = $('#simplePHP').serializeArray();

                    $('#' + formID).trigger('reset');

                    $.ajax({
                        url: 'php/send.php',
                        data: product_fields,
                        type: 'POST',
                        async: false,
                        success: function () {

                            window.location = 'thank_you';

                            sessionStorage.clear();
                        }
                    });
                }, 1000);

            }
        });

                $('#codePHP').validate({

                    submitHandler: function () {

                        setTimeout(function () {

                            var product_fields = $('#codePHP').serializeArray();

                            $('#' + formID).trigger('reset');

                            $.ajax({
                                url: 'php/send.php',
                                data: product_fields,
                                type: 'POST',
                                async: false,
                                success: function () {

                                    window.location = 'thank_you';

                                    sessionStorage.clear();
                                }
                            });
                        }, 1000);

                    }
                });

        $(".btnSendForm").click(function () {

            event.preventDefault();

            formID = $(this).closest("form").attr('id');

            $('#' + formID).submit();

        });

});
