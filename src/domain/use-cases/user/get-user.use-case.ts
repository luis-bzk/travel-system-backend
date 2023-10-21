import { GetUserDto } from '../../dtos';
import { User } from '../../entities';
import { UserRepository } from '../../repositories';

interface GetUserUseCase {
  execute(getUserDto: GetUserDto): Promise<User>;
}

export class GetUser implements GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(getUserDto: GetUserDto): Promise<User> {
    const user = await this.userRepository.get(getUserDto);
    return user;
  }
}
