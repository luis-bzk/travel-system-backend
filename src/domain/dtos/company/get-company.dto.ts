import { isValidObjectId } from 'mongoose';

export class GetCompanyDto {
  constructor(public id: string) {}

  static create(id: string): [string?, GetCompanyDto?] {
    if (!id) return ['El id de la compañía es requerido'];
    if (!isValidObjectId(id)) return ['El id de la compañía no es valido'];

    return [undefined, new GetCompanyDto(id)];
  }
}
