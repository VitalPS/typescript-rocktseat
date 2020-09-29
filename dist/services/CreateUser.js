"use strict";
/**
 *
 * Tipando variáveis
 *    1- tipo de informação que ela carrega (string vazia, não é obrigatório e é do tipo string )
 *    2- tipo de dado (string, boolean, number, object etc..., nesse caso é obrigatória)
 */
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    // CreateUser esta instanciado para a interface CreateUserData, logo toda info nova nesta função deve estar tipada dentro da CreateUserData interface
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs,
    };
    return user;
}
exports.default = CreateUser;
