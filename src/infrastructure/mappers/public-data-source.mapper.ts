import { PublicUserData } from "../../domain";
import { CustomError } from "../../domain/errors";



export class PublicUserDataMapper {
    static publicDataSourceEntityFromObject(object: { [key: string]: any }) {
        const { _id, identification, id_user, id_address, primary_phone, secondary_phone } = object;

        if (!_id) throw CustomError.badRequest('Falta el id del rol');
        if (!identification) throw CustomError.badRequest('Falta la identificación del usuario');
        if (!id_user) throw CustomError.badRequest('Falta el id del usuario');
        if (!id_address) throw CustomError.badRequest('Falta el id de la direccion');
        if (!primary_phone) throw CustomError.badRequest('Falta el número de teléfono celular');

        return new PublicUserData(_id, identification, id_user, id_address, primary_phone, secondary_phone);
    }

    static publicUsersDatasEntitiesFromObject(objects: { [key: string]: any }[]) {
        objects.forEach((publicUSerData) => {
            const { _id, identification, id_user, id_address, primary_phone } = publicUSerData;

            if (!_id) throw CustomError.badRequest('Falta el id del rol');
            if (!identification) throw CustomError.badRequest('Falta la identificación del usuario');
            if (!id_user) throw CustomError.badRequest('Falta el id del usuario');
            if (!id_address) throw CustomError.badRequest('Falta el id de la dirección');
            if (!primary_phone) throw CustomError.badRequest('Falta el número de teléfono celular');
        });

        return objects.map((publicUSerData) => new PublicUserData(publicUSerData._id, publicUSerData.identification, publicUSerData.id_user, publicUSerData.id_country, publicUSerData.primary_phone, publicUSerData.secondary_phone));
    }
}