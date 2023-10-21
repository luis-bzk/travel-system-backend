import { isValidObjectId } from 'mongoose';

export class DeleteCompanyDto {
  constructor(public id: string) {}

  static create(id: string): [string?, DeleteCompanyDto?] {
    if (!id) return ['El id de la compañía es requerido'];
    if (!isValidObjectId(id)) return ['El id de la compañía no es valido'];

    return [undefined, new DeleteCompanyDto(id)];
  }
}
