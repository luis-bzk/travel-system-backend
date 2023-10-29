import { Address } from '../entities';
import { CreateAddressDto, GetAddressDto, UpdateAddressDto } from '../dtos';

export abstract class AddressRepository {
  abstract create(createAddressDto: CreateAddressDto): Promise<Address>;
  abstract update(updateAddressDto: UpdateAddressDto): Promise<Address>;
  abstract get(getAddressDto: GetAddressDto): Promise<Address>;
}
