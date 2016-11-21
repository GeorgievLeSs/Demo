<?php

error_reporting(0);

$myPHPForm;

$sizeFormElement = "col-sm-6 col-md-3";

$nameElement = array (
    "First_Name" => array(
       "type" => "input",
       "name" => "First_Name",
       "id" => "FirstName",
       "Label" => "First Name",
       ),
    "Last_Name" => array(
       "type" => "input",
       "name" => "Last_Name",
       "id" => "LastName",
       "Label" => "Last Name",
    ),
     "City" => array(
        "type" => "input",
        "name" => "City",
        "id" => "City",
        "Label" => "City",
    ),
     "Country" => array(
        "type" => "input",
        "name" => "Country",
        "id" => "Country",
        "Label" => "Country",
    ),
     "Mobile_Phone" => array(
        "type" => "input",
        "name" => "Mobile_Phone",
        "id" => "MobilePhone",
        "Label" => "Mobile Phone",
    ),
     "Second_Phone" => array(
        "type" => "input",
        "name" => "Second_Phone",
        "id" => "SecondPhone",
        "Label" => "Second Phone",
    ),
     "Color" => array(
        "type" => "input",
        "name" => "Color",
        "id" => "Color",
        "Label" => "Color",
    ),
     "Car" => array(
        "type" => "input",
        "name" => "Car",
        "id" => "Car",
        "Label" => "Car",
    ),
     "Motorcicle" => array(
        "type" => "input",
        "name" => "Motorcicle",
        "id" => "Motorcicle",
        "Label" => "Motorcicle",
    ),
     "Music" => array(
        "type" => "input",
        "name" => "Music",
        "id" => "Music",
        "Label" => "Music",
    ),
     "Partners" => array(
        "type" => "input",
        "name" => "Partners",
        "id" => "Partners",
        "Label" => "Partners",
    ),
     "Vacation" => array(
        "type" => "input",
        "name" => "Vacation",
        "id" => "Vacation",
        "Label" => "Vacation",
    ),
     "Best_Vacation" => array(
        "type" => "input",
        "name" => "Best_Vacation",
        "id" => "BestVacation",
        "Label" => "Best Vacation",
    ),
     "Job" => array(
        "type" => "input",
        "name" => "Job",
        "id" => "Job",
        "Label" => "Job",
    ),
     "Best_Salary" => array(
        "type" => "input",
        "name" => "Best_Salary",
        "id" => "BestSalary",
        "Label" => "Best Salary",
    ),
     "Your_Age" => array(
        "type" => "select",
        "name" => "Your_Age",
        "id" => "YourAge",
        "Label" => "Your Age",
        "options" => range(0, 100),
    ),
     "Best_Friends" => array(
        "type" => "select",
        "name" => "Best_Friends",
        "id" => "BestFriends",
        "Label" => "Best Friends",
        "options" => range(0, 10),
    ),
     "Top_Speed" => array(
        "type" => "select",
        "name" => "Top_Speed",
        "id" => "TopSpeed",
        "Label" => "Top Speed",
        "options" => range(0, 250),
    ),
     "Are_You_Smoke" => array(
        "type" => "select",
        "name" => "Are_You_Smoke",
        "id" => "AreYouSmoke",
        "Label" => "Are You Smoke",
        "options" => array(
            "Yes",
            "No",
            "Rear",
            "At Holidays",
            "All the time",
        ),
    ),
     "How_Long" => array(
        "type" => "input",
        "name" => "How_Long",
        "id" => "HowLong",
        "Label" => "How Long",
    ),
);

foreach ($nameElement as $k => $v) {

    if($v['type'] == "select"){

        if(!$v['Label']){

           $label =  str_replace('_', ' ', $v['name']);

        } else {

            $label = $v['Label'];
        }

        $sel = null;

            $sel .= '<option value="">Please Select</option>';

        foreach ($v['options'] as $u) {

            $sel .= '<option value="' . $u . '">' . $u . '</option>';
        }

          $myPHPForm .= '<div class="form-group ' . $sizeFormElement .'"> '
                                    . '<label for="' . $v['id'] . '"> ' . $label . '<br/>'
                                    . '<select class="form-control" id="' . $v['id'] . '" name="' . $v['name'] . '"  data-role="none">' . $sel . '</select>' . ' </label>'
                                    . '</div>';
    } else {

          $myPHPForm .= '<div class="form-group ' . $sizeFormElement .'"> '
                                    . '<label for="' . $v['id'] . '"> ' . $v['Label'] . '<br/>'
                                    . '<input type="input" class="form-control" id="' . $v['id'] . '" name="' . $v['name'] . '"/>' . '</label></div>';
    }
}
$txtForm = '<pre>'; print_r($myPHPForm); '</pre>';


?>
