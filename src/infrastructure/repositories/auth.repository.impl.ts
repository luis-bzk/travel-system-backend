import {
  AuthDataSource,
  AuthRepository,
  LoginUserDto,
  ConfirmUserDto,
  RegisterUserDto,
  ReqRecoverUserDto,
  User,
  ChangePasswordUserDto,
  CheckTokenUserDto,
} from '../../domain';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}

  login(loginUserDto: LoginUserDto): Promise<User> {
    return this.authDataSource.login(loginUserDto);
  }
  register(registerUserDto: RegisterUserDto): Promise<User> {
    return this.authDataSource.register(registerUserDto);
  }
  reqRecover(reqRecoverUserDto: ReqRecoverUserDto): Promise<User> {
    return this.authDataSource.reqRecover(reqRecoverUserDto);
  }
  confirm(confirmUserDto: ConfirmUserDto): Promise<User> {
    return this.authDataSource.confirmUser(confirmUserDto);
  }
  checkToken(checkTokenUserDto: CheckTokenUserDto): Promise<User> {
    return this.authDataSource.checkToken(checkTokenUserDto);
  }
  changePassword(changePasswordUserDto: ChangePasswordUserDto): Promise<User> {
    return this.authDataSource.changePassword(changePasswordUserDto);
  }
}
