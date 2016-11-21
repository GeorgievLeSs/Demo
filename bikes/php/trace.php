<?php

$SEND_FORM = true;

$log_file = 'traceHistory.xml';

$redirect_data = array();

$result_post = print_r($_POST, true);

array_push($redirect_data, $_POST);

$result_redirect = print_r($redirect_data, true);

    file_put_contents($log_file, "<redirect>\n$result_redirect \n</redirect>\n", FILE_APPEND);

$servername = "localhost";

$username = "LeSs";

$password = "362159847159847zsewaq";

$dbname = "bikesdb";

    $StartingPoint = $_POST['StartingPoint'];

    $EndPoint = $_POST['EndPoint'];

try {

    $conn = new PDO("mysql:dbname=$dbname;host=$servername", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("INSERT INTO tracedb(
            startPoint,
            endPoint) VALUES (
            :StartingPoint,
            :EndPoint)");

    $stmt->bindParam(':StartingPoint', $StartingPoint);
    $stmt->bindParam(':EndPoint', $EndPoint);

    $stmt->execute();

  $newId = $conn->lastInsertId();

  $data['last_id'] = $newId;

    }
      catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
      echo 'Direct Access is not allowed !!!';
    }
