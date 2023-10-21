import { CreateUserDto, DeleteUserDto, GetUserDto, UpdateUserDto } from '../dtos';
import { User } from '../entities';

export abstract class UserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<{ user: User; password: string }>;
  abstract update(updateUserDto: UpdateUserDto): Promise<User>;
  abstract get(getUserDto: GetUserDto): Promise<User>;
  abstract getAll(): Promise<User[]>;
  abstract delete(deleteUserDto: DeleteUserDto): Promise<{}>;
}
