import { isValidObjectId } from 'mongoose';

export class UpdateCityDto {
  constructor(public id: string, public name: string, public id_province: string) {}

  static create(object: { [key: string]: any }, id: string): [string?, UpdateCityDto?] {
    const { name, id_province } = object;

    if (!id) return ['El ID de la ciudad es requerido'];
    if (!isValidObjectId(id)) return ['El ID de la ciudad no es valido'];
    if (!name) return ['El nombre del país es requerido'];
    if (!id_province) return ['El ID de la provincia requerido'];
    if (!isValidObjectId(id_province)) return ['El ID de la provincia no es valido'];

    return [undefined, new UpdateCityDto(id, name, id_province)];
  }
}
