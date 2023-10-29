import { AddressModel } from '../../data';
import { AddressMapper } from '../mappers';
import { Address } from '../../domain/entities';
import { CustomError } from '../../domain/errors';
import { AddressDataSource } from '../../domain/dataSources';
import { CreateAddressDto, GetAddressDto, UpdateAddressDto } from '../../domain/dtos';

export class AddressDataSourceImpl implements AddressDataSource {
  constructor() {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const { id_city, id_country, id_province, main_street, postal_code, secondary_street = '' } = createAddressDto;

    try {
      const address = await AddressModel.create({
        id_city,
        id_country,
        id_province,
        main_street,
        postal_code,
        secondary_street,
      });

      return AddressMapper.entityFromObject(address);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.log(error);
      throw CustomError.internalServer();
    }
  }

  async update(updateAddressDto: UpdateAddressDto): Promise<Address> {
    const { id, id_city, id_country, id_province, main_street, postal_code, secondary_street = '' } = updateAddressDto;

    try {
      const exists = await AddressModel.findById(id);
      if (!exists) throw CustomError.notFound('La dirección solicitada no se encuentra registrada en el sistema');

      exists.set({
        id_city,
        id_country,
        id_province,
        main_street,
        postal_code,
        secondary_street,
      });

      const updated = await exists.save();

      return AddressMapper.entityFromObject(updated);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.log(error);
      throw CustomError.internalServer();
    }
  }

  async get(getAddressDto: GetAddressDto): Promise<Address> {
    const { id } = getAddressDto;

    try {
      const exists = await AddressModel.findById(id).lean();
      if (!exists) throw CustomError.notFound('La dirección solicitada no se encuentra registrada en el sistema');

      return AddressMapper.entityFromObject(exists);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      console.log(error);
      throw CustomError.internalServer();
    }
  }
}
