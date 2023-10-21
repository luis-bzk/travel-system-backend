import { ChangePasswordUserDto } from '../../dtos';
import { AuthRepository } from '../../repositories';

interface ChangePasswordUserUseCase {
  execute(changePasswordUserDto: ChangePasswordUserDto): Promise<{}>;
}

export class ChangePasswordUser implements ChangePasswordUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(changePasswordUserDto: ChangePasswordUserDto): Promise<{}> {
    const updateUser = await this.authRepository.changePassword(changePasswordUserDto);
    return updateUser;
  }
}
