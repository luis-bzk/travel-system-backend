import { CheckTokenUserDto } from '../../dtos';
import { User } from '../../entities';
import { AuthRepository } from '../../repositories';

interface CheckTokenUserUseCase {
  execute(checkTokenUserDto: CheckTokenUserDto): Promise<User>;
}

export class CheckTokenUser implements CheckTokenUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(checkTokenUserDto: CheckTokenUserDto): Promise<User> {
    const confirmUser = await this.authRepository.checkToken(checkTokenUserDto);
    return confirmUser;
  }
}
