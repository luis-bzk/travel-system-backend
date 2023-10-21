import { UpdatePublicUserDataDto } from "../../dtos";
import { PublicUserData } from "../../entities";
import { PublicUserDataRepository } from "../../repositories";

interface UpdatePublicUserDataUseCase {
    execute(updatePublicUserDataDto: UpdatePublicUserDataDto): Promise<PublicUserData>;
  }
  
  export class UpdatePublicUserData implements UpdatePublicUserDataUseCase {
    constructor(private readonly publicUserDataRepository: PublicUserDataRepository) {}
  
    async execute(updatePublicUserDataDto: UpdatePublicUserDataDto): Promise<PublicUserData> {
      const createdPublicUserData = await this.publicUserDataRepository.update(updatePublicUserDataDto);
      return createdPublicUserData;
    }
  }