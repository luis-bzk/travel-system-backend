// Data transfer object

import { isValidObjectId } from 'mongoose';

export class DeleteRoleDto {
  constructor(public id: string) {}

  static create( id: string): [string?, DeleteRoleDto?] {
    // make validation
    if (!isValidObjectId(id)) return ['El id del rol no es valido'];
    return [undefined, new DeleteRoleDto(id)];
  }
}
