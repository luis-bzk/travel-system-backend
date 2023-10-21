import { CreateAddressDto, UpdateAddressDto } from '../dtos';
import { Address } from '../entities';

export abstract class AddressDataSource {
  abstract create(createAddressDto: CreateAddressDto): Promise<Address>;
  abstract update(updateAddressDto: UpdateAddressDto): Promise<Address>;
}
