class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    getArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}