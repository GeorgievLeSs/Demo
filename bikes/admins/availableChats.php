
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>
            Administrators Room
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Administrators room">
        <meta name="theme-color" content="#999999" />
        <link rel="stylesheet" type="text/css" href="../jscss/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../jscss/css/style.css">
    </head>
    <body>

            <header id="navigation adminHeader">

                <div class="container">

                    <nav class="navbar navbar-pills navBG" role="navigation">

                        <div class="navbar-header">

                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#downMenu" aria-expanded="false">

                                <span>

                                  Menu
                                </span>
                            </button>

                            <a class="navbar-brand" href="home">

                                <img src="../jscss/images/logo/mark.jpg" alt="Rainbow" class="logo">
                            </a>
                        </div>

                        <div class="collapse navbar-collapse pull-right" id="downMenu">

                            <ul class="nav navbar-nav navbar-right menu adminNav">

                                <li>

                                      <a href="adminChats.php">

                                          Administrator Page
                                      </a>
                                </li>
                                <li>

                                    <a href="availableChats.php">

                                        Available Chats
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <section id="admin">

                <div class="container">

                    <h3>Administrators Page</h3>

                        <form>

                          <button name='createDB' data-role='none'  id='createDB' class='styleButtonDB'>Create DB.</button>
                          <button name='createChatDB' data-role='none'  id='createChats' class='styleButtonDB'>Create table for Chats.</button>
                          <button name='createCloseChatDB' data-role='none'  id='closeChats' class='styleButtonDB'>Create table for Closed Chats.</button>
                          <button name='createTraceChatDB' data-role='none'  id='traceDB' class='styleButtonDB'>Create table for Trace.</button>
                          <br/>

                          <button name='refreshPage' data-role='none'  id='refreshChats' class='styleButton'>Check for new Chats</button>
                        </form>
                        <?php include 'php/adminChatRoom.php'; ?>

                </div>
            </section>

            <footer>

                <div class="container">

                    <div class="textAlignCenter">

                        <h5>SOON</h5>
                    </div>
                </div>
            </footer>

        <script type="text/javascript" src="../jscss/js/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src="../jscss/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="jscss/js/distributeChat.js"></script>
    </body>
</html>
