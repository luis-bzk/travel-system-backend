import { Company } from '../../domain';
import { CustomError } from '../../domain/errors';

export class CompanyMapper {
  static companyFromObject(object: { [key: string]: any }) {
    const { _id, name, social_reason, email, RUC, phone, cellphone, id_address, domain, schedule } = object;

    if (!_id) throw CustomError.badRequest('Falta el id de la compañía');
    if (!name) throw CustomError.badRequest('Falta el id de la compañía');
    if (!social_reason) throw CustomError.badRequest('Falta el id de la compañía');
    if (!email) throw CustomError.badRequest('Falta el id de la compañía');
    if (!RUC) throw CustomError.badRequest('Falta el id de la compañía');
    if (!phone) throw CustomError.badRequest('Falta el id de la compañía');
    if (!cellphone) throw CustomError.badRequest('Falta el id de la compañía');
    if (!id_address) throw CustomError.badRequest('Falta el id de la compañía');
    if (!domain) throw CustomError.badRequest('Falta el id de la compañía');
    if (!schedule) throw CustomError.badRequest('Falta el id de la compañía');

    return new Company(_id, name, social_reason, email, RUC, phone, cellphone, id_address, domain, schedule);
  }

  static companiesEntitiesFromObject(objects: { [key: string]: any }[]) {
    objects.forEach((company) => {
      const { _id, name, social_reason, email, RUC, phone, cellphone, id_address, domain, schedule } = company;

      if (!_id) throw CustomError.badRequest('Falta el id de la compañía');
      if (!name) throw CustomError.badRequest('Falta el id de la compañía');
      if (!social_reason) throw CustomError.badRequest('Falta el id de la compañía');
      if (!email) throw CustomError.badRequest('Falta el id de la compañía');
      if (!RUC) throw CustomError.badRequest('Falta el id de la compañía');
      if (!phone) throw CustomError.badRequest('Falta el id de la compañía');
      if (!cellphone) throw CustomError.badRequest('Falta el id de la compañía');
      if (!id_address) throw CustomError.badRequest('Falta el id de la compañía');
      if (!domain) throw CustomError.badRequest('Falta el id de la compañía');
      if (!schedule) throw CustomError.badRequest('Falta el id de la compañía');
    });

    return objects.map(
      (company) =>
        new Company(
          company._id,
          company.name,
          company.social_reason,
          company.email,
          company.RUC,
          company.phone,
          company.cellphone,
          company.id_address,
          company.domain,
          company.schedule
        )
    );
  }
}
