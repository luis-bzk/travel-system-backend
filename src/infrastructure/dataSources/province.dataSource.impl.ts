import { CountryModel, ProvinceModel } from '../../data';
import { CreateProvinceDto, DeleteProvinceDto, GetProvinceDto, Province, UpdateProvinceDto } from '../../domain';
import { ProvincesDataSource } from '../../domain/dataSources';
import { CustomError } from '../../domain/errors';
import { ProvinceMapper } from '../mappers';

export class ProvincesDataSourceImpl implements ProvincesDataSource {
  constructor() {}

  async create(createProvinceDto: CreateProvinceDto): Promise<Province> {
    const { name, id_country } = createProvinceDto;

    try {
      const exists = await ProvinceModel.findOne({ name: name }).lean();
      if (exists) {
        throw CustomError.badRequest('La provincia ya se encuentra registrada.');
      }

      const country = await CountryModel.findById(id_country).lean();
      if (!country) {
        throw CustomError.notFound('El país no se encuentra registrado en el sistema.');
      }

      const province = await ProvinceModel.create({
        name,
        id_country,
      });

      return ProvinceMapper.provinceEntityFromObject(province);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async update(updateProvinceDto: UpdateProvinceDto): Promise<Province> {
    const { id, name, id_country } = updateProvinceDto;

    try {
      const exists = await ProvinceModel.findById(id);
      if (!exists) {
        throw CustomError.notFound('La provincia no se encuentra registrada en el sistema.');
      }

      const country = await CountryModel.findById(id_country).lean();
      if (!country) {
        throw CustomError.notFound('El país no se encuentra registrado en el sistema.');
      }

      exists.set({
        name: name,
        id_country: id_country,
      });

      const updated = await exists.save();

      return ProvinceMapper.provinceEntityFromObject(updated);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async get(getProvinceDto: GetProvinceDto): Promise<Province> {
    const { id } = getProvinceDto;
    try {
      const exists = await ProvinceModel.findById(id);
      if (!exists) {
        throw CustomError.notFound('La provincia no se encuentra registrada en el sistema.');
      }

      return ProvinceMapper.provinceEntityFromObject(exists);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async getAll(): Promise<Province[]> {
    try {
      const provinces = await ProvinceModel.find();

      return ProvinceMapper.provincesEntitiesFromObject(provinces);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async delete(deleteProvinceDto: DeleteProvinceDto): Promise<{}> {
    const { id } = deleteProvinceDto;
    try {
      const exists = await ProvinceModel.findById(id);
      if (!exists) {
        throw CustomError.badRequest('La provincia no se encuentra registrada en el sistema.');
      }

      // TODO: DELETE CITIES

      const deleteRole = await ProvinceModel.deleteOne({ _id: id });
      if (deleteRole.deletedCount === 0) {
        throw CustomError.notFound('No se pudo eliminar la provincia.');
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
