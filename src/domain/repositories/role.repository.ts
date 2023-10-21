import { CreateRoleDto, DeleteRoleDto, GetRoleDto, UpdateRoleDto } from '../dtos';
import { Role } from '../entities';

export abstract class RoleRepository {
  abstract create(createRoleDto: CreateRoleDto): Promise<Role>;
  abstract update(updateRoleDto: UpdateRoleDto): Promise<Role>;
  abstract delete(deleteRoleDto: DeleteRoleDto): Promise<{}>;
  abstract get(getRoleDto: GetRoleDto): Promise<Role>;
  abstract getAll(): Promise<Role[]>;
}
