import { UpdateAddressDto } from '../../dtos';
import { Address } from '../../entities';
import { AddressRepository } from '../../repositories';

interface UpdateAddressUseCase {
  execute(updateAddressDto: UpdateAddressDto): Promise<Address>;
}

export class UpdateAddress implements UpdateAddressUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(updateAddressDto: UpdateAddressDto): Promise<Address> {
    const address = await this.addressRepository.update(updateAddressDto);
    return address;
  }
}
