class FileController {
    constructor() {
        this._inputData = document.querySelector('.file-data');        
    }

    send() {
        let file = FileHelper.gener8(this._inputData.value);
        console.log(`Dados do arquivo: ${file.name}, ${file.size}, ${file.type}`);
        this._cleanForm();
    }

    _cleanForm() {
        this._inputData.value = '';
        this._inputData.focus();
    }
}