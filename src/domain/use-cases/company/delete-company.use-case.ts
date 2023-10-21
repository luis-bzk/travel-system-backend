import { DeleteCompanyDto } from '../../dtos';
import { CompanyRepository } from '../../repositories';

interface DeleteCompanyUseCase {
  execute(deleteCompanyDto: DeleteCompanyDto): Promise<{}>;
}

export class DeleteCompany implements DeleteCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(deleteCompanyDto: DeleteCompanyDto): Promise<{}> {
    const company = await this.companyRepository.delete(deleteCompanyDto);
    return company;
  }
}
