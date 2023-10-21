import { UpdateRoleDto } from '../../dtos';
import { Role } from '../../entities';
import { RoleRepository } from '../../repositories';

interface UpdateRoleUseCase {
  execute(updateRoleDto: UpdateRoleDto): Promise<Role>;
}

export class UpdateRole implements UpdateRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepository.update(updateRoleDto);

    return role;
  }
}
