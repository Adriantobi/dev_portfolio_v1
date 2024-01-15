<?php
    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($email == "talktotobi.a@gmail.com" and $password == "iknowwhereyoulive") {
        header ("location: blog.html");
    }
?>.