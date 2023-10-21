import { Address, AddressDataSource, AddressRepository, CreateAddressDto, UpdateAddressDto } from '../../domain';

export class AddressRepositoryImpl implements AddressRepository {
  constructor(private readonly addressDataSource: AddressDataSource) {}

  create(createAddressDto: CreateAddressDto): Promise<Address> {
    return this.addressDataSource.create(createAddressDto);
  }

  update(updateAddressDto: UpdateAddressDto): Promise<Address> {
    return this.addressDataSource.update(updateAddressDto);
  }
}
