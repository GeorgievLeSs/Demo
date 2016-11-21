
$(document).ready(function () {

// admin take chat
var adminId;

$("#refreshChats").click(function(event) {

        event.preventDefault();

    location.reload();
});
var buttonID;
$(".styleButtonDB").click(function(event) {

        event.preventDefault();

                    buttonID = $(this).attr('id');
                    
                $.ajax({
                    url: 'php/createDBs.php',
                    data: {createDB: buttonID},
                    type: 'POST',
                    async: false,
                    dataType: 'json',
                    success: function (response) {

                      console.log("It`s created!!!");

                        // $('#separateBox' + response.adminID).hide();
                    }
                });
});

    $(".adminGetChat").click(function(event){

        event.preventDefault();
        var chatAdminId = $(this).closest("form").attr('id');
        adminId = chatAdminId.replace("admin", "");

        event.preventDefault();

        $("#adminChat" + adminId).submit();

        $.ajax({
            url: 'php/adminNamePHP.php',
            data: {chatID: adminId, FirstName:$("input[name='FirstName']").val(), LastName:$("input[name='LastName']").val()},
            type: 'POST',
            async: false,
            dataType: 'json',
            success: function (response) {

                $('#separateBox' + response.adminID).hide();
            }
        });
    });
});
