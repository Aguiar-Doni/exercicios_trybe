class Student {
    private _matricula: string;
    private _nome: string;
    private _notasProvas: number[] = Array();
    private _notasTrabalhos: number[] = Array();

    constructor(matricula: string, nome: string, notasProvas: number[], notasTrabalhos: number[]) {
        this._matricula = matricula;
        this._nome = nome;
        this.notasProvas = notasProvas;
        this.notasTrabalhos = notasTrabalhos;
    }

    // get set matricula
    public get matricula(): string {
        return this._matricula;
    }
    public set matricula(value: string) {
        this._matricula = value;
    }

    // get set nome
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 2 caracteres.')
        }
        this._nome = value;
    }


    // get set notas provas
    public get notasProvas(): number[] {
        return this._notasProvas;
    }
    public set notasProvas(value: number[]) {
        if (value.length !== 4) {
            throw new Error('A pessoa estudante deve possuir ao menos 4 notas de provas')
        }
        this._notasProvas = value;
    }

    // get set notas trabalhos
    public get notasTrabalhos(): number[] {
        return this._notasTrabalhos;
    }
    public set notasTrabalhos(value: number[]) {
        if (value.length !== 2) {
            throw new Error('A pessoa estudante deve possuir ao menos 2 notas de trabalhos')
        }
        this._notasTrabalhos = value;
    }

    somaDasNotas(): number {
        return [...this.notasProvas, ...this.notasTrabalhos] 
        .reduce((acc, curr) => { // parametros do reduce -- > acumulador, corrente 
            curr += acc; // adiciona o valor corrente ao acumulado
            return curr 
        }, 0);
    }

    mediaDasNotas(): number {
        const somaDasNotas = this.somaDasNotas();
        const divisor = this.notasProvas.length + this.notasTrabalhos.length;

        return Math.round(somaDasNotas / divisor);
    }
}

const estudante1 = new Student('123', 'rafael', [9, 9, 8, 5], [8, 7]);
console.log(estudante1);
console.log('Soma das notas:', estudante1.somaDasNotas());
console.log('Media das notas:', estudante1.mediaDasNotas());


const estudante2 = new Student('321', 'kevellyn', [9, 9, 9, 9], [7, 4]);
console.log(estudante2);
console.log('Soma das notas:', estudante2.somaDasNotas());
console.log('Media das notas:', estudante2.mediaDasNotas());