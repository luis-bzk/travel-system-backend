import { isValidObjectId } from 'mongoose';

export class DeleteCountryDto {
  constructor(public id: string) {}

  static create(id: string): [string?, DeleteCountryDto?] {
    // make validation
    if (!isValidObjectId(id)) return ['El id del país no es valido'];

    return [undefined, new DeleteCountryDto(id)];
  }
}
