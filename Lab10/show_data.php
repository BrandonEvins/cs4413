<?php
$file = '../data/private_data.txt'; // Path to the same non-public directory

if (file_exists($file)) {
    $fileContents = file($file); // Read file into an array

    echo '<table border="1">';
    echo '<tr><th>First Name</th><th>Last Name</th></tr>';
    
    foreach ($fileContents as $line) {
        $names = explode(' ', $line);
        echo '<tr>';
        echo '<td>' . $names[0] . '</td>';
        echo '<td>' . $names[1] . '</td>';
        echo '</tr>';
    }

    echo '</table>';
} else {
    echo "File not found.";
}
?>