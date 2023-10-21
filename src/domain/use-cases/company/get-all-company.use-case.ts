import { Company } from '../../entities';
import { CompanyRepository } from '../../repositories';

interface GetAllCompanyUseCase {
  execute(): Promise<Company[]>;
}

export class GetAllCompanies implements GetAllCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(): Promise<Company[]> {
    const companies = await this.companyRepository.getAll();
    return companies;
  }
}
