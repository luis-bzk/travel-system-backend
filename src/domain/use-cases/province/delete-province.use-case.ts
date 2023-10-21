import { DeleteProvinceDto } from '../../dtos';
import { ProvincesRepository } from '../../repositories';

interface DeleteProvinceUseCase {
  execute(deleteProvinceDto: DeleteProvinceDto): Promise<{}>;
}

export class DeleteProvince implements DeleteProvinceUseCase {
  constructor(private readonly provincesRepository: ProvincesRepository) {}

  async execute(deleteProvinceDto: DeleteProvinceDto): Promise<{}> {
    const deletedProvince = await this.provincesRepository.delete(deleteProvinceDto);
    return deletedProvince;
  }
}
