import {
  CreateUserDto,
  GetUserDto,
  UpdateUserDto,
  User,
  UsersDataSource,
  UserRepository,
  DeleteUserDto,
} from '../../domain';

export class UsersRepositoryImpl implements UserRepository {
  constructor(private readonly usersDataSource: UsersDataSource) {}

  create(createUserDto: CreateUserDto): Promise<{ user: User; password: string }> {
    return this.usersDataSource.create(createUserDto);
  }

  update(updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersDataSource.update(updateUserDto);
  }

  get(getUserDto: GetUserDto): Promise<User> {
    return this.usersDataSource.get(getUserDto);
  }

  getAll(): Promise<User[]> {
    return this.usersDataSource.getAll();
  }

  delete(deleteUserDto: DeleteUserDto): Promise<{}> {
    return this.usersDataSource.delete(deleteUserDto);
  }
}
