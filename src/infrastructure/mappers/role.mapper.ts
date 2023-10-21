import { Role } from '../../domain';
import { CustomError } from '../../domain/errors';

export class RoleMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { _id, name } = object;

    if (!_id) {
      throw CustomError.badRequest('Falta el id del rol');
    }

    if (!name) throw CustomError.badRequest('Falta el nombre del rol');

    return new Role(_id, name);
  }

  static usersEntitiesFromObject(objects: { [key: string]: any }[]) {
    objects.forEach((role) => {
      const { _id, name } = role;

      if (!_id) throw CustomError.badRequest('Falta el id del rol');
      if (!name) throw CustomError.badRequest('Falta el nombre del rol');
    });

    return objects.map((role) => new Role(role._id, role.name));
  }
}
