import { CreateCompanyDto } from '../../dtos';
import { Company } from '../../entities';
import { CompanyRepository } from '../../repositories';

interface CreateCompanyUseCase {
  execute(createCompanyDto: CreateCompanyDto): Promise<Company>;
}

export class CreateCompany implements CreateCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.create(createCompanyDto);
    return company;
  }
}
