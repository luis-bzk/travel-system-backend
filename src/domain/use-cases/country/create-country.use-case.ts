import { CreateCountryDto } from "../../dtos";
import { Country } from "../../entities";
import { CountryRepository } from "../../repositories";

interface CreateCountryUseCase {
    execute(createCountryDto: CreateCountryDto): Promise<Country>;
  }
  
  export class CreateCountry implements CreateCountryUseCase {
    constructor(private readonly countryRepository: CountryRepository) {}
  
    async execute(createCountryDto: CreateCountryDto): Promise<Country> {
      const country = await this.countryRepository.create(createCountryDto);
  
      return country;
    }
  }