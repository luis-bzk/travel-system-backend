import { isValidObjectId } from "mongoose";

export class UpdatePublicUserDataDto {
    constructor(
        public id: string,
        public identification: string,
        public id_user: string,
        public id_address: string,
        public primary_phone: string,
        public secondary_phone: string,
    ) { }

    static create(object: { [key: string]: any }, id: string): [string?, UpdatePublicUserDataDto?] {
        const { identification, id_user, id_address, primary_phone, secondary_phone } = object;

        // make validation
        if (!id) return ['El id de los datos publicos del usuario es requerido'];
        if (!isValidObjectId(id)) return ['El id de los datos publicos no es valido'];
        if (!identification) return ['La identificación es requerida'];
        if (!id_user) return ['El id del usuario es requerido'];
        if (!isValidObjectId(id_user)) return ['El id del usuario no es valido'];
        if (!id_address) return ['El id de la dirección es requerido'];
        //   if (!isValidObjectId(id_address)) return ['El id de la dirección no es valido'];
        if (!primary_phone && isNaN(parseInt(primary_phone))) return [' El teléfono debe contener solo números y es requerido.'];
        console.log(isNaN(parseInt(secondary_phone)));
        if (isNaN(parseInt(secondary_phone))) return [' El teléfono debe contener solo números.'];

        return [undefined, new UpdatePublicUserDataDto(id, identification, id_user, id_address, primary_phone, secondary_phone )];
    }
}