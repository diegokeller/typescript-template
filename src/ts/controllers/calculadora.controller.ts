import { Matematica } from "../services/matematica.service";

export class CalculadoraController {
	
	somar() {
		console.log('Somando');
		var campo1 = document.getElementById('numero1') as HTMLInputElement;
		var campo2 = document.getElementById('numero2') as HTMLInputElement;
		var campoResultado = document.getElementById('resultado') as HTMLElement;

		var numero1 = parseFloat(campo1.value);
		var numero2 = parseFloat(campo2.value);
		console.log(numero1, numero2);

		var resultado = new Matematica().somar(numero1, numero2);
		console.log('Resultado', resultado);

		campoResultado.innerHTML = resultado.toString();
	}

}