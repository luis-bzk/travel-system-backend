import { Country } from '../../domain';
import { CustomError } from '../../domain/errors';

export class CountryMapper {
  static countryEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, name, code, prefix } = object;

    if (!_id || !id) {
      throw CustomError.badRequest('Falta el id del país');
    }

    if (!name) throw CustomError.badRequest('Falta el nombre del país');
    if (!code) throw CustomError.badRequest('Falta el code del país');
    if (!prefix) throw CustomError.badRequest('Falta el prefix del país');

    return new Country(_id || id, name, code, prefix);
  }

  static countriesEntitiesFromObject(objects: { [key: string]: any }[]) {
    objects.forEach((country) => {
      const { id, _id, name, code, prefix } = country;

      if (!_id || !id) {
        throw CustomError.badRequest('Falta el id del país');
      }

      if (!name) throw CustomError.badRequest('Falta el nombre del país');
      if (!code) throw CustomError.badRequest('Falta el code del país');
      if (!prefix) throw CustomError.badRequest('Falta el prefix del país');
    });

    return objects.map((country) => new Country(country._id || country.id, country.name, country.code, country.prefix));
  }
}
