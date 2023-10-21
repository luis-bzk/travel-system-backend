// Data transfer object

import { isValidObjectId } from 'mongoose';

export class GetRoleDto {
  constructor(public id: string) {}

  static create(id: string): [string?, GetRoleDto?] {
    // make validation
    if (!isValidObjectId(id)) return ['El id del rol no es valido'];

    return [undefined, new GetRoleDto(id)];
  }
}
