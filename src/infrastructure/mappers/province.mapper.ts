import { Province } from '../../domain';
import { CustomError } from '../../domain/errors';

export class ProvinceMapper {
  static provinceEntityFromObject(object: { [key: string]: any }) {
    const { _id, name, id_country } = object;

    if (!_id) throw CustomError.badRequest('Falta el id de la provincia');
    if (!name) throw CustomError.badRequest('Falta el nombre de la provincia');
    if (!id_country) throw CustomError.badRequest('Falta el id del país');

    return new Province(_id, name, id_country);
  }

  static provincesEntitiesFromObject(objects: { [key: string]: any }[]) {
    objects.forEach((province) => {
      const { _id, name, id_country } = province;

      if (!_id) throw CustomError.badRequest('Falta el id de la provincia');
      if (!name) throw CustomError.badRequest('Falta el nombre de la provincia');
      if (!id_country) throw CustomError.badRequest('Falta el id del país');
    });

    return objects.map((province) => new Province(province._id, province.name, province.id_country));
  }
}
