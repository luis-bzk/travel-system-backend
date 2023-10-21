import { isValidObjectId } from 'mongoose';

export class GetProvinceDto {
  constructor(public id: string) {}

  static create(id: string): [string?, GetProvinceDto?] {
    if (!id) return ['El id de la provincia es requerido'];
    if (!isValidObjectId(id)) return ['El id de la provincia no es valido'];

    return [undefined, new GetProvinceDto(id)];
  }
}
