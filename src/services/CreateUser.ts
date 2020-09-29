/**
 *
 * Tipando variáveis
 *    1- tipo de informação que ela carrega (string vazia, não é obrigatório e é do tipo string )
 *    2- tipo de dado (string, boolean, number, object etc..., nesse caso é obrigatória)
 */

// precisa criar outra interface para fazer a tipagem de um objeto que contenha strings e numeros e que vá dentro de outro objeto
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // ? significa que esta variáel é optativa
  email: string;
  password: string;
  techs: Array<string | TechObject>; // pode receber ou uma string ou um objeto com a interface TechObject
}

export default function CreateUser({
  name,
  email,
  password,
  techs,
}: CreateUserData) {
  // CreateUser esta instanciado para a interface CreateUserData, logo toda info nova nesta função deve estar tipada dentro da CreateUserData interface
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
