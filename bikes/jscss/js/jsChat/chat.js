

$(document).ready(function () {

//to save used inputs values
    var saveValue;

    $('input, select').click( function(e){

        saveValue = e.currentTarget.name;

            $(this).on("change",function () {

                sessionStorage.setItem((saveValue+saveValue), this.value);
            });
        });

    var retriveValue;

    $('input, select').each(function() {

         retriveValue = $(this).attr("name");

            if (sessionStorage.getItem(retriveValue+retriveValue)) {

                $(this).val(sessionStorage.getItem(retriveValue+retriveValue));
            };
    });

    var formID;
    var chatID;
    var textareaID;
    var sessionUser;

        $.validator.setDefaults({
            onkeyup: false,
            ignore: "hidden",
            messages: {

                FirstName: 'Please enter First Name',
                LastName: 'Please enter Last Name',
                Email: 'Please enter email'
            },
            rules: {

                FirstName: {required: true, letters: true, minlength: 2},
                LastName: {required: true, letters: true, minlength: 2},
                Email: {required: true, email: true}
            }
        });

      var userIP;
            $.getJSON("http://jsonip.com/?callback=?", function (data) {

                userIP = data.ip;
            });

    // user starting Chat
                $("#chatFormUser").validate({

                    submitHandler: function () {

                        setTimeout(function () {

                            var userInfo = $("#chatFormUser").serializeArray();

                            userInfo.push({name: 'userIP', value: userIP});

                            $.ajax({
                                url: 'php/phpChat/php.php',
                                data: userInfo,
                                type: 'POST',
                                async: false,
                                dataType: 'json',
                                success: function (response) {

                                    $("#inChatForm").hide();

                                    var last_id = JSON.parse(response.last_id); // last_id has the last insert id

                                    chatID = last_id;

                                    formID = last_id;

                                    $('input[name="chatID"]').attr('value', chatID);
                                    $('#typeMsg form').attr('id', chatID);
                                    $('#typeMsg textarea').attr('id', "btn"+chatID)

                sessionStorage.setItem('pass', last_id);
                sessionUser = 'sessionUser' + last_id;

                            // Execute every 5 seconds to refresh Chat
                                window.setInterval(refreshChat, 5000);

                              window.load = checkCookie();

                                }

                            });

                        }, 2000);

                    }
                });

        $("#btnChatFormUser").click(function () {

            event.preventDefault();

            $("#chatFormUser").submit();
        });

var timeOutTitle;
var timeOutTitleSecond;
var intervalFlashNewMsg;
var executed;
var lastFormID = sessionStorage.getItem('pass');

    // refreshing Chat
            function refreshChat(){

                 $.ajax({

                   url: 'php/phpChat/receive.php',
                   data: {chatID:formID},
                   dataType: 'json',
                   success: function (response) {

                        $('#chatArea').empty();

                        $('#chatArea').append(response.newMsgGet);

                        if (response.adminSend == 'adminSend'+formID || response.adminSend == 'adminSend'+changePage){

                            function soundChat() {

                                    if (executed == false) {

                                        executed = true;
                                        document.getElementById('soundChat').play();

                                    }
                            };

                            soundChat();

                                timeOutTitle = setTimeout(function () {

                                    document.title = 'You have new message';

                                 }, 1000);

                                timeOutTitleSecond = setTimeout(function () {

                                    document.title = 'TITLE';

                                 }, 3000);
                        }

                        if (response.lastState == 'close'){

                            delete_cookie();

                            myStopFunction();

                            document.title = 'TITLE';

                            $('#chatArea').empty();

                            $("#inChatForm").show();

                            sessionStorage.removeItem('pass');

                            location.reload();
                        }
                    },
                });
            }

// to stop Refreshing of Chat
function myStopFunction() {

        clearInterval(intervalFlashNewMsg);

        clearTimeout(timeOutTitle);
}

    // user send chat Message
        $(".sendWithEnter").keydown(function(event){

                formID = $(this).closest("form").attr('id');

                textareaID = this.id;

            myStopFunction();

            document.title = 'TITLE';

            if(event.keyCode == 13 && textareaID == "btn" + formID){

                $.ajax({

                    url: 'php/phpChat/connection.php',
                    data: {chatID:formID, userMsg:$("#"+textareaID).val(), userSend:'userSend'+formID},
                    type: 'POST',
                    async: false,
                    dataType: 'json',
                    success: function (response) {

                        $('#chatArea').empty();

                        $('#chatArea').append(response.newMsg);

                        $('textarea').val(' ');

                        executed = false;

                    }
                });
            } else if (event.keyCode == 13) {

                console.log("Bug on sending of message at Enter press.");
            }

        });

    // to show/hide chat box
    var changePage;

    $('#openChat').click(function(){

        var sessionChatID = sessionStorage.getItem('pass');

        formID = sessionChatID;

        changePage = sessionChatID;

             $.ajax({

               url: 'php/phpChat/receive.php',
               data: {chatID:sessionChatID},
               dataType: 'json',
               success: function (response) {

                              $('#chatArea').empty();

                              $('#chatArea').append(response.newMsgGet);

                              refreshChat();
                          },
              });

        if ($('#userChat').css('bottom') == '-270px'){

                $('#userChat').css('bottom', '10px');

                $('#arrow img').css('transform', 'rotate(180deg)','-webkit-transform', 'rotate(180deg)');

            } else {

                $('#userChat').css('bottom', '-270px');

                $('#arrow img').css('transform', 'rotate(0deg)','-webkit-transform', 'rotate(0deg)');
            }

        $('input[name="chatID"]').attr('value', sessionChatID);

        $('#typeMsg form').attr('id', sessionChatID);

        $('#typeMsg textarea').attr('id', "btn"+sessionChatID);

                // Execute every 5 seconds to refresh Chat
                    window.setInterval(refreshChat, 2000)
    });


    // closing chat
        $('#topBar span').click(function(){

            var closeFormID = sessionStorage.getItem('pass');

            $.ajax({

                url: 'php/phpChat/closeChat.php',
                data: { chatID:closeFormID},
                async: false,
                success: function () {

                    $('#userChat').css('bottom', '-270px');

                    $('#arrow img').css('transform', 'rotate(0deg)','-webkit-transform', 'rotate(0deg)');

                    $('#chatArea').empty();

                    $("#inChatForm").show();

                    sessionStorage.removeItem('pass');
                }
            });

            delete_cookie();
        });

    function setCookie(userChatCookie,userChatCookieValue) {

        document.cookie = userChatCookie+"="+userChatCookieValue+"; ";
    }

    function getCookie(userChatCookie) {

        var name = userChatCookie + "=";

        var arrayCookieChat = document.cookie.split(';');

        for(var i=0; i<arrayCookieChat.length; i++) {

            var everyCookie = arrayCookieChat[i];

            while (everyCookie.charAt(0)==' ') {

                everyCookie = everyCookie.substring(1);
            }
            if (everyCookie.indexOf(name) == 0) {

                return everyCookie.substring(name.length, everyCookie.length);
            }
        }

        return "";
    }

        var user = getCookie("username");

        function checkCookie() {

            if (user == 'sessionUser') {

                $("#inChatForm").hide();

            } else {

               user = 'sessionUser';

               if (user != "" && user != null) {

                   setCookie("username", user, 30);
               }
            }
        }
//
        function checkUserSession() {

            if (user == 'sessionUser') {

                $("#inChatForm").hide();
            }
        }
function delete_cookie() {

  document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"';
}
//
    window.load = checkUserSession();
});
