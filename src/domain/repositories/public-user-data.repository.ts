import { CreatePublicUserDataDto, GetPublicUserDataDto, UpdatePublicUserDataDto, DeletePublicUserDataDto } from '../dtos';
import { PublicUserData } from '../entities';

export abstract class PublicUserDataRepository {
  abstract create(createPublicUserDataDto: CreatePublicUserDataDto): Promise<PublicUserData>;
  abstract update(updatePublicUserDataDto: UpdatePublicUserDataDto): Promise<PublicUserData>;
  abstract get(getPublicUserDataDto: GetPublicUserDataDto): Promise<PublicUserData>;
  abstract delete(deletePublicUserDataDto: DeletePublicUserDataDto): Promise<{}>;
}
