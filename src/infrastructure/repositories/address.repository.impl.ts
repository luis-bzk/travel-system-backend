import { Address } from '../../domain/entities';
import { AddressDataSource } from '../../domain/dataSources';
import { AddressRepository } from '../../domain/repositories';
import { CreateAddressDto, GetAddressDto, UpdateAddressDto } from '../../domain/dtos';

export class AddressRepositoryImpl implements AddressRepository {
  constructor(private readonly addressDataSource: AddressDataSource) {}

  create(createAddressDto: CreateAddressDto): Promise<Address> {
    return this.addressDataSource.create(createAddressDto);
  }
  update(updateAddressDto: UpdateAddressDto): Promise<Address> {
    return this.addressDataSource.update(updateAddressDto);
  }
  get(getAddressDto: GetAddressDto): Promise<Address> {
    return this.addressDataSource.get(getAddressDto);
  }
}
