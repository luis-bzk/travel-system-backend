import { Province } from '../../entities';
import { ProvincesRepository } from '../../repositories';

interface GetAllProvinceUseCase {
  execute(): Promise<Province[]>;
}

export class GetAllProvinces implements GetAllProvinceUseCase {
  constructor(private readonly provincesRepository: ProvincesRepository) {}

  async execute(): Promise<Province[]> {
    const getAllProvinces = await this.provincesRepository.getAll();
    return getAllProvinces;
  }
}
