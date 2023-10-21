import { CreateAddressDto } from '../../dtos';
import { Address } from '../../entities';
import { AddressRepository } from '../../repositories';

interface CreateAddressUseCase {
  execute(createAddressDto: CreateAddressDto): Promise<Address>;
}

export class CreateAddress implements CreateAddressUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = await this.addressRepository.create(createAddressDto);
    return address;
  }
}
