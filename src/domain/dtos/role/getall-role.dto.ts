// Data transfer object

import { isValidObjectId } from 'mongoose';

export class GetAllRoleDto {
  constructor(public id: string) {}

  static create(id: string): [string?, GetAllRoleDto?] {
    // make validation
    if (!isValidObjectId(id)) return ['El id del rol no es valido'];

    return [undefined, new GetAllRoleDto(id)];
  }
}
