import { GetCompanyDto } from '../../dtos';
import { Company } from '../../entities';
import { CompanyRepository } from '../../repositories';

interface GetCompanyUseCase {
  execute(getCompanyDto: GetCompanyDto): Promise<Company>;
}

export class GetCompany implements GetCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(getCompanyDto: GetCompanyDto): Promise<Company> {
    const company = await this.companyRepository.get(getCompanyDto);
    return company;
  }
}
