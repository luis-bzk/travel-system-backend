import { isValidObjectId } from 'mongoose';

export class DeletePublicUserDataDto {
  constructor(public id: string) {}

  static create(id: string): [string?, DeletePublicUserDataDto?] {
    // make validation
    if (!isValidObjectId(id)) return ['El id de la información del usuario público no es valido'];
    return [undefined, new DeletePublicUserDataDto(id)];
  }
}
