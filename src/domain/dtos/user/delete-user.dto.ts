import { isValidObjectId } from 'mongoose';

export class DeleteUserDto {
  constructor(public id: string) {}

  static create(id: string): [string?, DeleteUserDto?] {
    if (!id) return ['El id del usuario es requerido'];
    if (!isValidObjectId(id)) return ['El id del usuario no es valido'];

    return [undefined, new DeleteUserDto(id)];
  }
}
