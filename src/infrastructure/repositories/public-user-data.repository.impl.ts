import {
  CreatePublicUserDataDto,
  DeletePublicUserDataDto,
  GetPublicUserDataDto,
  PublicUserData,
  PublicUserDataDataSource,
  PublicUserDataRepository,
  UpdatePublicUserDataDto,
} from '../../domain';

export class PublicUserDataRepositoryImpl implements PublicUserDataRepository {
  constructor(private readonly publicUserDataDataSource: PublicUserDataDataSource) {}
  create(createPublicUserDataDto: CreatePublicUserDataDto): Promise<PublicUserData> {
    return this.publicUserDataDataSource.create(createPublicUserDataDto);
  }
  update(updatePublicUserDataDto: UpdatePublicUserDataDto): Promise<PublicUserData> {
    return this.publicUserDataDataSource.update(updatePublicUserDataDto);
  }
  get(getPublicUserDataDto: GetPublicUserDataDto): Promise<PublicUserData> {
    return this.publicUserDataDataSource.get(getPublicUserDataDto);
  }
  delete(deletePublicUserDataDto: DeletePublicUserDataDto): Promise<{}> {
    return this.publicUserDataDataSource.delete(deletePublicUserDataDto);
  }
}
