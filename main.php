<?php include_once 'content/header.php' ?>

<?php include_once 'content/navbar.php' ?>

<?php
	$sesion = $_GET["s"] ? $_GET["s"] : '';
?>


      

<div class="sesion">
	<?php
	if ($sesion == "s1") {
		include 'sesion/sesion01.php';
	} elseif ($sesion == "s2") {
		include 'sesion/sesion02.php';
	} elseif ($sesion == "s3") {
		include 'sesion/sesion03.php';
	}elseif ($sesion == "s4") {
		include 'sesion/sesion04.php';
	} else{
		include 'sesion/start.php';
	}
	?>
</div>

<?php include_once 'content/footer.php' ?>