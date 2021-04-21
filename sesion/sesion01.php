<div id="main"></div>

<div id="controls" class="text-center py-2">
	<h4>Identificando componentes</h4>
	<div class="row">
		<div class="col-4">
			<label for="obj1">x:</label>
			<input type="checkbox" id="girar_x" value="first_checkbox">
		</div>
		<div class="col-4">
			<label for="obj1">y:</label>
			<input type="checkbox" id="girar_y" value="first_checkbox">
		</div>
		<div class="col-4">
			<label for="obj1">z :</label>
			<input type="checkbox" id="girar_z" value="first_checkbox">
		</div>
	</div>
	<div class="row">
		<div class="col-6">
			<select class="form-control" id="idElemento">
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
				<option>13</option>
				<option>14</option>
			</select>
		</div>
		<div class="col-6">
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Consultar
			</button>
		</div>
		<div class="col-12 py-2">
			<a href="?s=s2" class="btn btn-success">Siguiente</a>
		</div>
	</div>
</div>

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Potencia - USB</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			Cada placa Arduino necesita una forma de estar alimentado electricamente. Esta puede ser alimentado desde un cable USB que viene de su ordenador.
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success" data-dismiss="modal">Entendido!!</button>
			</div>
		</div>
	</div>
</div>

<script>
	let title = "";
	let content = "";

	const selectElement = document.querySelector('#idElemento');

	selectElement.addEventListener('change', (event) => {
		idElemento = event.target.value;
		switch (idElemento) {
			case "1":
				title="Potencia - USB"; 
				content = "Cada placa Arduino necesita una forma de estar alimentado electricamente. Esta puede ser alimentado desde un cable USB que viene de su ordenador."
				break;
			case "2":
				title = "Conector de Adaptador"
				content = "Cada placa Arduino necesita una forma de estar alimentado electricamente. Puede ser con un cable de corriente eléctrica con su respectivo adaptador."
				break;
			case "3":
				title = "Pines GND "
				content = "Abreviatura de tierra (en Ingles). Hay varios pines GND en el Arduino, cualquiera de los cuales pueden ser utilizados para conectar a tierra el circuito."
				break;
			case "4":
				title = "Pines 5V  "
				content = "Son los suministros pin 5V 5 voltios de energía"
				break;
			case "5":
				title = "Pines 3.3V "
				content = "los suministros de pin 3.3V 3.3 voltios de potencia."
				break;
			case "6":
				title = "Pines Analógico  "
				content = "El área de pines en el marco del 'analógica' etiqueta (A0 a A5) son analógicas. Estos pines pueden leer la señal de un sensor analógico (como un sensor de temperatura) y convertirlo en un valor digital que podemos leer."
				break;
			case "7":
				title = "Pines Digital  "
				content = "Son los pines digitales (del 0 al 13). Estos pines se pueden utilizar tanto para la entrada digital (como decir, si se oprime un botón) y salida digital (como encender un LED)."
				break;
			case "8":
				title = "Pines PWM  "
				content = "Usted puede haber notado la tilde (~) al lado de algunos de los pines digitales (3, 5, 6, 9, 10 y 11). Estos pines actúan como pines digitales normales, pero también se pueden usar para algo llamado Modulación por ancho de pulsos (PWM, por sus siglas en Ingles)."
				break;
			case "9":
				title = "Pines AREF  "
				content = "Soportes de referencia analógica. La mayoría de las veces se puede dejar este pin solo. A veces se utiliza para establecer una tensión de referencia externa (entre 0 y 5 voltios) como el límite superior para los pines de entrada analógica."
				break;
			case "10":
				title = "Botón de reinicio  "
				content = "Empujando este botón se conectará temporalmente el pin de reset a tierra y reinicie cualquier código que se carga en el Arduino. Esto puede ser muy útil si el código no se repite, pero quiere probarlo varias veces."
				break;
			case "11":
				title = "Indicador LED de alimentación"
				content = "Este LED debe encenderse cada vez que conecte la placa Arduino a una toma eléctrica. Si esta luz no se enciende, hay una buena probabilidad de que algo anda mal."
				break;
			case "12":
				title = "LEDs RX TX "
				content = "TX es la abreviatura de transmisión, RX es la abreviatura de recibir. Estas marcas aparecen un poco en la electrónica para indicar los pasadores responsables de la comunicación en serie. En nuestro caso, hay dos lugares en la Arduino UNO donde aparecen TX y RX - una vez por pines digitales 0 y 1, y por segunda vez junto a los indicadores LED de TX y RX (12). Estos LEDs nos darán algunas buenas indicaciones visuales siempre nuestro Arduino está recibiendo o transmitiendo datos (como cuando nos estamos cargando un nuevo programa en el tablero)."
				break;
			case "13":
				title = "Microcontrolador"
				content = "Lo negro con todas las patas de metal es un circuito integrado (IC, por sus siglas en Ingles). Piense en ello como el cerebro de nuestro Arduino. La principal IC en el Arduino es ligeramente diferente del tipo de placa a placa tipo, pero es por lo general de la línea de ATmega de CI de la empresa ATMEL. Esto puede ser importante, ya que puede necesitar para saber el tipo de IC (junto con su tipo de tarjeta) antes de cargar un nuevo programa desde el software de Arduino. Esta información se puede encontrar en la escritura en la parte superior de la IC. Si quieres saber más acerca de la diferencia entre diversos circuitos integrados, la lectura de las hojas de datos suele ser una buena idea."
				break;
			case "14":
				title = "Regulador de Voltaje"
				content = "Esto no es realmente algo que se puede (o debe) interactuar con el Arduino. Pero es potencialmente útil para saber que está ahí y para qué sirve. El regulador de voltaje hace exactamente lo que dice - que controla la cantidad de tensión que se deja en la placa Arduino. Piense en ello como una especie de guardián; se dará la espalda a una tensión adicional que podría dañar el circuito. Por supuesto, tiene sus límites, por lo que no conecta tu Arduino a nada superior a 20 voltios."
				break;
			default:
				title="Potencia - USB"; 
				content = "Cada placa Arduino necesita una forma de estar alimentado electricamente. Esta puede ser alimentado desde un cable USB que viene de su ordenador."
				break;

		}
		const resultado = document.querySelector('.modal-body');
		const resultadoTitle = document.querySelector('.modal-title');
		resultadoTitle.textContent = title;
		resultado.textContent = content;
	});
</script>