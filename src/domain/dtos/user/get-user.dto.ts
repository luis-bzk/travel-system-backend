import { isValidObjectId } from 'mongoose';

export class GetUserDto {
  constructor(public id: string) {}

  static create(id: string): [string?, GetUserDto?] {
    if (!id) return ['El id del usuario es requerido'];
    if (!isValidObjectId(id)) return ['El id del usuario no es valido'];

    return [undefined, new GetUserDto(id)];
  }
}
