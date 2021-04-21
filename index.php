<?php
	include_once 'content/header.php'
?>
<body id="bg-login">
<div id="login">
	<h3 class="text-center text-white pt-1">Bienvenido a AstroLAB</h3>
	<div class="container">

		<div id="login-row" class="row justify-content-center align-items-center">
			<div id="login-column" class="col-md-6">
				<div id="login-box" class="col-md-12">
					<form id="login-form" class="form" action="" method="post">
						<h3 class="text-center text-info">Login</h3>
						<div class="form-group">
							<label for="username" class="text-info">USUARIO:</label><br>
							<input type="text" name="username" id="username" class="form-control">
						</div>
						<div class="form-group">
							<label for="password" class="text-info">CONTRASEÑA:</label><br>
							<input type="text" name="password" id="password" class="form-control">
						</div>
						<div class="form-group text-center">
							<p>Usuario: admin <br> Contraseña: admin</p>
							<p class="mensaje"></p>
							<button id="enviar" class="btn btn-primary">Enviar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		
	</div>
</div>
<script>
	let enviar = document.getElementById("enviar");
	enviar.addEventListener("click",(event)=>{
		event.preventDefault();
		let user = $("#username").val();
		let pass = $("#password").val();
		if(user == "admin" && pass == "admin"){
			window.location.replace("main.php");
		}else{
			alert("Datos incorrectos");
		}
	});
</script>
<?php
	include_once 'content/footer.php'
?>