class StrHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }


    static replaceSpecialChars(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Removeacentos

    }

    static replaceSpaceForHifen(str) {
        return str
            .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
            .replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
            .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
    }


    // static replaceSpecialChars = (str) => {
    //     return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
    //         .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
    //         .replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
    //         .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
    // }

}