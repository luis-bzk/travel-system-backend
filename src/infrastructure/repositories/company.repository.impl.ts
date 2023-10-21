import {
  Company,
  CompanyDataSource,
  CompanyRepository,
  CreateCompanyDto,
  DeleteCompanyDto,
  GetCompanyDto,
  UpdateCompanyDto,
} from '../../domain';

export class CompanyRepositoryImpl implements CompanyRepository {
  constructor(private readonly companyDataSource: CompanyDataSource) {}

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyDataSource.create(createCompanyDto);
  }

  update(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyDataSource.update(updateCompanyDto);
  }

  get(getCompanyDto: GetCompanyDto): Promise<Company> {
    return this.companyDataSource.get(getCompanyDto);
  }

  getAll(): Promise<Company[]> {
    return this.companyDataSource.getAll();
  }

  delete(deleteCompanyDto: DeleteCompanyDto) {
    return this.companyDataSource.delete(deleteCompanyDto);
  }
}
