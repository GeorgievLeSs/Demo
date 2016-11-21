<?php

error_reporting(0);

$myCodeForm;

$sizeFormElement = "col-sm-6 col-md-3";

$nameElement = array (

    "First_Name",
    "Last_Name",
    "City",
    "Country",
    "Mobile_Phone",
    "Second_Phone",
    "Color_input",
    "Car",
    "Motorcicle",
    "Music",
    "Partners",
    "Vacation",
    "Best_Vacation",
    "Job",
    "Best_Salary",
    "Your_Age_select",
    "Best_Friends_select",
    "Top_Speed_select",
    "Are_You_Smoke_select",
    "How_Long",
);

        $yourAge = range(0,100);

        $bestFreinds = range(0,10);

        $topSpeed = range(0,250);

        $Are__You_Smoke = array(

            "Please Select",
            "Yes",
            "No",
            "Rear",
            "At Holidays",
            "All the time",
        );

$selectArrays = array (
       "Your_Age_select"=> $yourAge,
       "Best_Friends_select"=> $bestFreinds,
       "Top_Speed_select"=> $topSpeed,
       "Are_You_Smoke_select"=> $Are__You_Smoke,
);

    foreach ($nameElement as $v) {

        if (strpos($v, '_select') !== false){

            $sel = null;

                        $sel = '<option value="">Please Select</option>';

                    foreach ($selectArrays[$v] as $u) {

                        $sel .= '<option value="' . $u . '">' . $u . '</option>';
                    }
                            $myCodeForm .= '<div class="form-group ' . $sizeFormElement . '"> '
                                    . '<label for="' . $v . '"> ' . str_replace(array('_', 'select'), ' ', $v) . '<br/>'
                                    . '<select class="form-control" id="' . $v . '" name="' . $v . '">' . $sel . '</select>' . ' </label>'
                                    . '</div>';

            } else {

                $myCodeForm .= '<div class="form-group ' . $sizeFormElement .'"> '
                        . '<label for="' . $v . '"> ' . str_replace('_', ' ', $v) . '<br/>'
                        . '<input type=text class="form-control" id="' . $v . '" name="' . $v . '"/>' . ' </label>'
                        . '</div>';
            }
    }

$txtForm = '<pre>'; print_r($myCodeForm); '</pre>';
