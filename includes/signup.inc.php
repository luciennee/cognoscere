<?php
 $var = "it worked.";
if (isset($_POST["submit"])) {
    echo $var;
};
else {
    header("location: ../signup.html")
};

?>

<h1>success<h1>