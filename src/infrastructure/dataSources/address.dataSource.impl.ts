import { AddressModel } from '../../data';
import { Address, AddressDataSource, CreateAddressDto, UpdateAddressDto } from '../../domain';
import { CustomError } from '../../domain/errors';
import { AddressMapper } from '../mappers';

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

      return AddressMapper.addressEntityFromObject(address);
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

      return AddressMapper.addressEntityFromObject(updated);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.log(error);
      throw CustomError.internalServer();
    }
  }
}
