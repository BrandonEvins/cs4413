<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'] ?? '';
    $lastName = $_POST['lastName'] ?? '';

    if (!empty($firstName) && !empty($lastName)) {
        $data = $firstName . ' ' . $lastName . "\n";
        $file = '../data/private_data.txt'; // Path to a non-public directory

        // Append data to the file
        file_put_contents($file, $data, FILE_APPEND);

        echo "Data saved successfully.";
    } else {
        echo "Please provide both first and last names.";
    }
} else {
    echo "Invalid request method.";
}
?>