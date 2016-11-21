

$(document).ready(function () {

        var nameS;
        var map;

        $('input, select').click( function(e){
            nameS = e.currentTarget.name;

                $(this).on("change",function () {
                    sessionStorage.setItem((nameS+nameS), this.value);
                });
        });

        $('input, select').each(function() {
            map = $(this).attr("name");

               if (sessionStorage.getItem(map+map)) {
                   $(this).val(sessionStorage.getItem(map+map));
               };
        });

   var textareaID;
   var formId;
   var formIdArray=[];

$("#adminBtn").click(function(){

        event.preventDefault();
        $("#adminLogin").submit();
});

$("#adminLogin").submit(function(){

      var formDataAdmin = $("#adminLogin").serializeArray();

            $.ajax({
              url: 'php/adminName.php',
              data: formDataAdmin,
              type: 'POST',
              async: false,
              success: function (response) {

                    $('body').css('background-color', 'rgb(50, 150, 50)');

                    sessionStorage.setItem('adminIDSession', $("input[name='FirstName']").val() + "_" + $("input[name='LastName']").val() );
                },
            });
        });

    var adminIDSession =   sessionStorage.getItem('adminIDSession');
// putting all chat ID in one array

    $('form').each(function(){
        formIdAll = $(this).attr('id');
        formIdArray.push(formIdAll);
    });

// for refreshing chat with users
    function refreshChat(){

        formIdArray.forEach( function(s) {

            $.ajax({
              url: 'php/checkNewMsg.php',
              data: {chatID: s},
              type: 'POST',
              dataType: 'json',
              success: function (response) {

                    if (response.userSend === 'userSend' + s){

                        $('#chat' + s).empty();

                        $('#chat' + s).append(response.oldMsg);

                        if ($( '#chat' + s ).css( "background-color" ) != "rgb(0, 200, 0)"){
                            $('#chat' + s).css('background', 'lime');
                        }
                    }
                },
            });
        });
    }

        window.setInterval(refreshChat, 2000);

// response on user Chat Msg
    $(".sendWithEnter").keydown(function(event){

            formId = $(this).closest("form").attr('id');
            textareaID = this.id;

            $('#chat' + formId).css('background', 'rgb(0, 200, 0)');

        if(event.keyCode == 13){

            $('#chat' + formId).css('background', 'orange');

            $('body').css('background', 'rgb(150, 100, 250)');

            $.ajax({
                url: 'php/adminResponse.php',
                data: {chatID:formId,userMsg:$("#"+textareaID).val(), adminSend:'adminSend'+formId},
                type: 'POST',
                async: false,
                dataType: 'json',
                success: function (response) {

                    $('#chat' + formId).empty();

                    $('#chat' + formId).append(response.newMsg);

                    $('textarea').val('');

                }
            });
        }
    });
});
