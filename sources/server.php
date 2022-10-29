<?php
include_once 'server.php';

$dbhost = 'localhost';
$dbusername = 'root';
$dbpass = '';
$dbname = 'declaration';

$mysql = mysql_connect ($dbhost, $dbusername, $dbpass, $dbname);

if (isset($_POST['send'])) {
    $grafa1_1 = $_POST['grafa1_1'];
    $grafa1_2 = $_POST['grafa1_2'];
    $grafa1_3 = $_POST['grafa1_3'];
    $sqlinsert = "INSERT INTO TitleList (grafa1_1, grafa1_2, grafa1_3) VALUES ('$grafa1_1', '$grafa1_2', '$grafa1_1')";

    if (!mysqli_query ($mysql, $sqlinsert)) {
        die ('error inserting new record');

    }
}   

?>