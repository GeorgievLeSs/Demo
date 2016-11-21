<?php




  $dbname = "bikesdb";
  $servername = "localhost";
  $username = "LeSs";
  $password = "362159847159847zsewaq";
  $dbCreate = $_POST['createDB'];
  $db="bikesdb";


      if ($dbCreate == "createDB"){

        try {
            $dbh = new PDO("mysql:host=$servername", $username, $password);

            $dbh->exec("CREATE DATABASE `$db`;
                    CREATE USER '$username'@'localhost' IDENTIFIED BY '$password';
                    GRANT ALL ON `$db`.* TO '$username'@'localhost';
                    FLUSH PRIVILEGES;")
            or die(print_r($dbh->errorInfo(), true));

        } catch (PDOException $e) {

            die("DB ERROR: ". $e->getMessage());
        }
      }

   if ($dbCreate == "closeChats"){
      try {
          $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $sql = "CREATE TABLE `bikesdb`.`closedchatdb` (
              `Chat_ID` int(100)   UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              `User_Names` varchar(50) COLLATE utf8_bin NOT NULL,
              `Chat_Text` mediumtext COLLATE utf8_bin,
              `E_Mail` varchar(30) COLLATE utf8_bin NOT NULL,
              `User_ID` varchar(20) COLLATE utf8_bin DEFAULT NULL,
              `State` varchar(10) COLLATE utf8_bin DEFAULT NULL,
              `Admin_ID` varchar(100) COLLATE utf8_bin DEFAULT NULL,
              `Sender` varchar(100) COLLATE utf8_bin DEFAULT NULL,
              `endChat` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
              `Date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
          )";
          // use exec() because no results are returned
          $conn->exec($sql);
          echo "Database created successfully<br>";
          }
      catch(PDOException $e)
          {
          echo $sql . "<br>" . $e->getMessage();
          }

      $conn = null;
  } elseif ($dbCreate == "createChats") {
     try {
         $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         $sql = "CREATE TABLE `bikesdb`.`liveDB` (
             `Chat_ID` int(100)  UNSIGNED AUTO_INCREMENT PRIMARY KEY,
             `User_Names` varchar(50) COLLATE utf8_bin NOT NULL,
             `Chat_Text` mediumtext COLLATE utf8_bin,
             `E_Mail` varchar(30) COLLATE utf8_bin NOT NULL,
             `User_ID` varchar(20) COLLATE utf8_bin DEFAULT NULL,
             `State` varchar(10) COLLATE utf8_bin DEFAULT NULL,
             `Admin_ID` varchar(100) COLLATE utf8_bin DEFAULT NULL,
             `Sender` varchar(100) COLLATE utf8_bin DEFAULT NULL,
             `endChat` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
             `Date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
         )";
         // use exec() because no results are returned
         $conn->exec($sql);
         echo "Database created successfully<br>";
         }
     catch(PDOException $e)
         {
         echo $sql . "<br>" . $e->getMessage();
         }

     $conn = null;
  } elseif ($dbCreate == "traceDB") {
     try {
         $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         $sql = "CREATE TABLE `bikesdb`.`tracedb` (
            `traceID` int(50) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            `startPoint` varchar(500) COLLATE utf8_bin NOT NULL,
            `endPoint` varchar(500) COLLATE utf8_bin NOT NULL,
            `requestAdded` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
         )";
         // use exec() because no results are returned
         $conn->exec($sql);
         echo "Database created successfully<br>";
         }
     catch(PDOException $e)
         {
         echo $sql . "<br>" . $e->getMessage();
         }

     $conn = null;
  }
?>
