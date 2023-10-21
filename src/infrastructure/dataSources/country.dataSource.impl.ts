import { CountryModel, ProvinceModel } from '../../data';
import {
  CountriesDataSource,
  Country,
  CreateCountryDto,
  DeleteCountryDto,
  GetCountryDto,
  UpdateCountryDto,
} from '../../domain';
import { CustomError } from '../../domain/errors';
import { CountryMapper } from '../mappers';

export class CountriesDataSourceImpl implements CountriesDataSource {
  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const { name, code, prefix } = createCountryDto;
    try {
      const exists = await CountryModel.findOne({ name });
      if (exists) throw CustomError.badRequest('El país ya se encuentra registrado dentro del sistema');

      const country = await CountryModel.create({
        name,
        code,
        prefix,
      });

      return CountryMapper.countryEntityFromObject(country);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async update(updateCountryDto: UpdateCountryDto): Promise<Country> {
    const { id, name, code, prefix } = updateCountryDto;

    try {
      const exists = await CountryModel.findById(id);
      if (!exists) throw CustomError.notFound('El país solicitado no se encuentra dentro del sistema');

      exists.set({
        name: name,
        code: code,
        prefix: prefix,
      });

      const updated = await exists.save();

      return CountryMapper.countryEntityFromObject(updated);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async get(getCountryDto: GetCountryDto): Promise<Country> {
    const { id } = getCountryDto;
    try {
      const exists = await CountryModel.findById(id);
      if (!exists) throw CustomError.notFound('El país solicitado no se encuentra dentro del sistema');

      return CountryMapper.countryEntityFromObject(exists);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async getAll(): Promise<Country[]> {
    try {
      const countries = await CountryModel.find();

      return CountryMapper.countriesEntitiesFromObject(countries);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async delete(deleteCountryDto: DeleteCountryDto): Promise<{}> {
    const { id } = deleteCountryDto;

    try {
      const provinces = await ProvinceModel.deleteMany({ id_country: id });
      if (provinces.deletedCount === 0) {
        throw CustomError.notFound('No se pudo eliminar la provincia.');
      }
      //TODO: Eliminar las ciudades por el id del pais
      const deleteCountry = await CountryModel.deleteOne({ _id: id });
      if (deleteCountry.deletedCount === 0) {
        throw CustomError.notFound('No se pudo eliminar el pais.');
      }
      return {};
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
