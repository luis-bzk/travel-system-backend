import { GetPublicUserDataDto } from '../../dtos';
import { PublicUserData } from '../../entities';
import { PublicUserDataRepository } from '../../repositories';

interface GetPublicUserDataUseCase {
  execute(getPublicUserDataDto: GetPublicUserDataDto): Promise<PublicUserData>;
}

export class GetPublicUserData implements GetPublicUserDataUseCase {
  constructor(private readonly publicUserDataRepository: PublicUserDataRepository) {}

  async execute(getPublicUserDataDto: GetPublicUserDataDto): Promise<PublicUserData> {
    const publicUserData = await this.publicUserDataRepository.get(getPublicUserDataDto);

    return publicUserData;
  }
}
