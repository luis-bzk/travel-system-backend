import { isValidObjectId } from 'mongoose';
import { Validators } from '../../../config';

export class UpdateUserDto {
  constructor(public id: string, public name: string, public lastName: string, public email: string) {}

  static create(object: { [key: string]: any }, id: string): [string?, UpdateUserDto?] {
    const { name, lastName, email } = object;

    if (!id) return ['El ID de usuario es requerido'];
    if (!isValidObjectId(id)) return ['El ID de usuario no es válido'];
    if (!name) return ['El nombre del usuario es requerido.'];
    if (!lastName) return ['El apellido del usuario es requerido.'];
    if (!email) return ['El email del usuario es requerido'];
    if (!Validators.email.test(email)) return ['El email ingresado no es valido'];

    return [undefined, new UpdateUserDto(id, name, lastName, email)];
  }
}
