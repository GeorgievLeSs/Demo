<?php

header('Content-type:application/json');

date_default_timezone_set('Europe/Sofia');
    $chatID = $_POST['chatID'];

    $dbname = "bikesdb";
    $servername = "localhost";
    $username = "LeSs";
    $password = "362159847159847zsewaq";

try {

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    ////

    $oldData = $conn->prepare("SELECT Chat_Text FROM liveDB WHERE Chat_ID =  '$chatID'");

    $oldData->execute();
             $clearOldData = $oldData->fetchColumn();
                     $oldMsgDB = trim(preg_replace('/\s+/', ' ', $clearOldData));

    $userNames = $conn->prepare("SELECT User_Names FROM liveDB WHERE Chat_ID =  '$chatID'");

    $userNames->execute();
//
             $clearText = $userNames->fetchColumn();
                     $newUserNames = trim(preg_replace('/-/', ' ', $clearText));

       $oldText = $conn->prepare("SELECT Chat_Text FROM liveDB WHERE Chat_ID =  '$chatID'");

       $oldText->execute();
   //
                $lastText = $oldText->fetchColumn();
                        $lastMsg = trim(preg_replace('/-/', ' ', $lastText));

                      $chat_text = $oldMsgDB . '<br/>' . $newUserNames . ': ' . $lastMsg;

    $newSend = $conn->prepare("SELECT Sender FROM liveDB WHERE Chat_ID =  '$chatID'");

    $newSend->execute();
             $lumr = $newSend->fetchColumn();
                     $lastSend = trim(preg_replace('/\s+/', ' ', $lumr));

    $oldState = $conn->prepare("SELECT State FROM liveDB WHERE Chat_ID =  '$chatID'");

    $oldState->execute();
             $newState = $oldState->fetchColumn();

        $catchAllOpenState = $conn->prepare("SELECT * FROM  liveDB WHERE State = 'open'");
        $catchAllOpenState->execute();
        $checkEachOne = $catchAllOpenState->fetchAll();

        foreach($checkEachOne as $row){

            $checkUserTime = $row['endChat'];
            $eachTimeStamp = strtotime($row['endChat']);
            $nowTimeStamp = strtotime(date("Y-m-d H:i:s"));
            $setCloseForOld = $eachTimeStamp - strtotime("3 minutes");

            if ( time() - $eachTimeStamp >=  3 * 60) {

                $closeChatByTime = $conn->prepare("UPDATE liveDB SET State = 'close' WHERE State = 'open' AND  Chat_ID =  '$chatID'");

                $closeChatByTime->execute();

            }


        }
        $transferRow = $conn->prepare(

              "INSERT INTO closedchatdb(Chat_ID, User_Names, Chat_Text, E_Mail, User_ID, State, Admin_ID, Sender, endChat, Date)
              SELECT Chat_ID, User_Names, Chat_Text, E_Mail, User_ID, State, Admin_ID, Sender, endChat, Date FROM liveDB
              WHERE State = 'close'"
        );

        $transferRow->execute();
        $transferRow = $conn->prepare(

              "DELETE FROM liveDB WHERE State = 'close'"
        );

        $transferRow->execute();

$data['newMsg'] = $chat_text;

$data['State'] = $newState;

$data['oldMsg'] = $oldMsgDB;
$data['userSend'] = $lastSend;

    }
catch(PDOException $e)
    {
    // echo "Connection failed: " . $e->getMessage() . " Really BAAAaaaAAAddddDDD!!! ";
    }

echo json_encode($data);

?>
