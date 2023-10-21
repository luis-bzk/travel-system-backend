// Data transfer object

import { isValidObjectId } from 'mongoose';

export class CreateProvinceDto {
  constructor(public name: string, public id_country: string) {}

  static create(object: { [key: string]: any }): [string?, CreateProvinceDto?] {
    const { name, id_country } = object;

    // make validation
    if (!name) return ['El nombre del rol es requerido'];
    if (!id_country) return ['El id del país es requerido'];
    if (!isValidObjectId(id_country)) return ['El id del país no es valido'];

    return [undefined, new CreateProvinceDto(name, id_country)];
  }
}
