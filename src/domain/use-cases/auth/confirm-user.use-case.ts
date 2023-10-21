import { ConfirmUserDto } from '../../dtos';
import { User } from '../../entities';
import { AuthRepository } from '../../repositories';

interface ConfirmUserUseCase {
  execute(confirmUserDto: ConfirmUserDto): Promise<User>;
}

export class ConfirmUser implements ConfirmUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(confirmUserDto: ConfirmUserDto): Promise<User> {
    const confirmUser = await this.authRepository.confirm(confirmUserDto);
    return confirmUser;
  }
}
