import { User } from '../../entities';
import { UserRepository } from '../../repositories';

interface GetAllUsersUseCase {
  execute(): Promise<User[]>;
}

export class GetAllUsers implements GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
