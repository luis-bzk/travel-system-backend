import { UpdateUserDto, CreateUserDto, DeleteUserDto } from '../dtos';
import { User } from '../entities';
import { GetUserDto } from '../dtos/user/get-user.dto';

export abstract class UsersDataSource {
  abstract create(createUserDto: CreateUserDto): Promise<{ user: User; password: string }>;
  abstract update(updateUserDto: UpdateUserDto): Promise<User>;
  abstract get(getUserDto: GetUserDto): Promise<User>;
  abstract getAll(): Promise<User[]>;
  abstract delete(deleteUserDto: DeleteUserDto): Promise<{}>;
}
