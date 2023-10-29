import { User } from '../../entities';
import { ReqRecoverUserDto } from '../../dtos';
import { AuthRepository } from '../../repositories';

interface ReqRecoverUserUseCase {
  execute(reqRecoverUserDto: ReqRecoverUserDto): Promise<{}>;
}

export class ReqRecoverUser implements ReqRecoverUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(reqRecoverUserDto: ReqRecoverUserDto): Promise<User> {
    const user = await this.authRepository.reqRecover(reqRecoverUserDto);

    return user;
  }
}
