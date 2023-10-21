import { UpdateCompanyDto } from '../../dtos';
import { Company } from '../../entities';
import { CompanyRepository } from '../../repositories';

interface UpdateCompanyUseCase {
  execute(updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}

export class UpdateCompany implements UpdateCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.update(updateCompanyDto);
    return company;
  }
}
