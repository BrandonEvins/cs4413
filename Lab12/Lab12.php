<?php

$cookie_name = "cs4413";
$cookie_value = "CookieSetValue";
$expiration_time = time() + (7 * 24 * 60 * 60); // 1 week expiration

if (isset($_COOKIE[$cookie_name])) {
    echo "The cookie named '$cookie_name' is already set with the value: " . $_COOKIE[$cookie_name];
} else {
    setcookie($cookie_name, $cookie_value, $expiration_time, "/");
    echo "The cookie named '$cookie_name' has been set with the value: '$cookie_value' and will expire in 1 week.";
}
?>