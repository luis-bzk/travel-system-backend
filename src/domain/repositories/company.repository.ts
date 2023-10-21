import { CreateCompanyDto, DeleteCompanyDto, GetCompanyDto, UpdateCompanyDto } from '../dtos';
import { Company } from '../entities';

export abstract class CompanyRepository {
  abstract create(createCompanyDto: CreateCompanyDto): Promise<Company>;
  abstract update(updateCompanyDto: UpdateCompanyDto): Promise<Company>;
  abstract get(getCompanyDto: GetCompanyDto): Promise<Company>;
  abstract getAll(): Promise<Company[]>;
  abstract delete(deleteCompanyDto: DeleteCompanyDto): Promise<{}>;
}
