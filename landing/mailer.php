<?php


/*
$fname = htmlspecialchars($_POST['fname']);
$lname = htmlspecialchars($_POST['lname']);
$email = htmlspecialchars($_POST['email']);
$body = htmlspecialchars($_POST['comments']);
*/

// send text messages
require_once 'swift/lib/swift_required.php';

$fName = htmlspecialchars($_POST['fname']);
$lName = htmlspecialchars($_POST['lname']);
$body = htmlspecialchars($_POST['comments']);
$email = htmlspecialchars($_POST['email']);

$name = $fName . " " . $lName;

if (isset($body) && isset($email) && isset($fName) && isset($lName)) {
	try {
		$transport = Swift_SmtpTransport::newInstance('studiocracy.com', 465, "ssl")
		  ->setUsername('test@studiocracy.com')
		  ->setPassword('test123');

		$mailer = Swift_Mailer::newInstance($transport);

		$message = Swift_Message::newInstance("Inquiry from " . $name)
			->setFrom(array($email => $name))
			->setTo(array('test@studiocracy.com'))
			->setBody($body);

		$result = $mailer->send($message);

		echo "Message successfully sent!";
	} catch (Exception $e) {
		echo "Message failed to send.";
	}
} else {
	$response = "There was an error sending your email. Please fill in all boxes.";

	echo $response;
}

//echo $name . " " . $body . " " . $email;
?>