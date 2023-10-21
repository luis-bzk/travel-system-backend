import {
  ChangePasswordUserDto,
  CheckTokenUserDto,
  ConfirmUserDto,
  LoginUserDto,
  RegisterUserDto,
  ReqRecoverUserDto,
} from '../dtos';
import { User } from '../entities';

export abstract class AuthRepository {
  abstract login(loginUserDto: LoginUserDto): Promise<User>;
  abstract register(registerUserDto: RegisterUserDto): Promise<User>;
  abstract reqRecover(reqRecoverUserDto: ReqRecoverUserDto): Promise<User>;
  abstract confirm(confirmUserDto: ConfirmUserDto): Promise<User>;
  abstract checkToken(checkTokenUserDto: CheckTokenUserDto): Promise<User>;
  abstract changePassword(changePasswordUserDto: ChangePasswordUserDto): Promise<User>;
}
