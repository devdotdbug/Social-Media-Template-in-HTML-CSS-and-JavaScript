<?php 
    define('USER_AGENT', $_SERVER['HTTP_USER_AGENT']);
    if (strpos(strtolower(USER_AGENT), 'mobile')) {
        echo file_get_contents('mobile.html');
    } else {
        echo file_get_contents('web.html');
    }
?>