import { RegisterUserDto } from '../../dtos';
import { User } from '../../entities';
import { AuthRepository } from '../../repositories';

interface RegisterUserUseCase {
  execute(registerUserDto: RegisterUserDto): Promise<{}>;
}

export class RegisterUser implements RegisterUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(registerUserDto: RegisterUserDto): Promise<User> {
    const user = await this.authRepository.register(registerUserDto);

    return user;
  }
}
