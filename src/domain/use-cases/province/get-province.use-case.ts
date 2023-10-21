import { GetProvinceDto } from '../../dtos';
import { Province } from '../../entities';
import { ProvincesRepository } from '../../repositories';

interface GetProvinceUseCase {
  execute(getProvinceDto: GetProvinceDto): Promise<Province>;
}

export class GetProvince implements GetProvinceUseCase {
  constructor(private readonly provincesRepository: ProvincesRepository) {}

  async execute(getProvinceDto: GetProvinceDto): Promise<Province> {
    const getProvince = await this.provincesRepository.get(getProvinceDto);
    return getProvince;
  }
}
