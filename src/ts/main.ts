import { CalculadoraController } from './controllers/calculadora.controller';

(function () {
	var calculadora = new CalculadoraController();

	document.getElementById('botaoResultado')?.addEventListener('click', (event) => {
		calculadora.somar();
	});
	

}())
