import { Matematica } from './matematica.service';

var sujeito = new Matematica();

describe('somar', () => {
	it('deve retornar a soma dos dois números', () => {
		expect(sujeito.somar(3, 5)).toBe(8);
	});
})

describe('isMultiplo', () => {
	it('deve true quando número é múltiplo do divisor', () => {
		expect(sujeito.isMultiplo(15, 3)).toBeTrue();
	});
	it('deve false quando número é múltiplo do divisor', () => {
		expect(sujeito.isMultiplo(15, 2)).toBeFalse();
	});
})
