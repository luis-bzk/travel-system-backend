// Data transfer object

import { isValidObjectId } from 'mongoose';

export class UpdateProvinceDto {
  constructor(public id: string, public name: string, public id_country: string) {}

  static create(object: { [key: string]: any }, id: string): [string?, UpdateProvinceDto?] {
    const { name, id_country } = object;

    // make validation
    if (!id) return ['El id de la provincia es requerido'];
    if (!isValidObjectId(id)) return ['El id de la provincia no es valido'];
    if (!name) return ['El nombre del rol es requerido'];
    if (!id_country) return ['El id del país es requerido'];
    if (!isValidObjectId(id_country)) return ['El id del país no es valido'];

    return [undefined, new UpdateProvinceDto(id, name, id_country)];
  }
}
