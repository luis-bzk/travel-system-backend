import { Role } from '../../entities';
import { RoleRepository } from '../../repositories';

interface GetAllRolesUseCase {
  execute(): Promise<Role[]>;
}

export class GetAllRoles implements GetAllRolesUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(): Promise<Role[]> {
    const roles = await this.roleRepository.getAll();

    return roles;
  }
}
