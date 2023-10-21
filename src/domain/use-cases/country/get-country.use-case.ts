import { GetCountryDto } from '../../dtos';
import { Country } from '../../entities';
import { CountryRepository } from '../../repositories';

interface GetCountryUseCase {
  execute(getCountryDto: GetCountryDto): Promise<Country>;
}

export class GetCountry implements GetCountryUseCase {
  constructor(private readonly countryRepository: CountryRepository) {}

  async execute(getCountryDto: GetCountryDto): Promise<Country> {
    const country = await this.countryRepository.get(getCountryDto);

    return country;
  }
}
