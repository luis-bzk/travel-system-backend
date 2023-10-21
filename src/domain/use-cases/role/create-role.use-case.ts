import { CreateRoleDto } from '../../dtos';
import { Role } from '../../entities';
import { RoleRepository } from '../../repositories';

interface CreateRoleUseCase {
  execute(createRoleDto: CreateRoleDto): Promise<Role>;
}

export class CreateRole implements CreateRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepository.create(createRoleDto);

    return role;
  }
}
