import { CreatePublicUserDataDto } from '../../dtos';
import { PublicUserData } from '../../entities';
import { PublicUserDataRepository } from '../../repositories';


interface CreatePublicUserDataUseCase {
    execute(createPublicUserDataDto: CreatePublicUserDataDto): Promise<PublicUserData>;
  }
  
  export class CreatePublicUserData implements CreatePublicUserDataUseCase {
    constructor(private readonly publicUserDataRepository: PublicUserDataRepository) {}
  
    async execute(createPublicUserDataDto: CreatePublicUserDataDto): Promise<PublicUserData> {
      const createdPublicUserData = await this.publicUserDataRepository.create(createPublicUserDataDto);
      return createdPublicUserData;
    }
  }
  