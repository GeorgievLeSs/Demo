<?php

//
$SEND_FORM = true;
$log_file = 'my_send_data.xml';
$redirect_data = array();    
$result_post = print_r($_POST, true); 

array_push($redirect_data, $_POST);
$result_redirect = print_r($redirect_data, true);
    file_put_contents($log_file, "<redirect>\n$result_redirect \n</redirect>\n", FILE_APPEND);

