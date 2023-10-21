import {
  CountriesDataSource,
  Country,
  CountryRepository,
  CreateCountryDto,
  DeleteCountryDto,
  GetCountryDto,
  UpdateCountryDto,
} from '../../domain';

export class CountryRepositoryImpl implements CountryRepository {
  constructor(private readonly countriesDataSource: CountriesDataSource) {}
  create(createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countriesDataSource.create(createCountryDto);
  }
  update(updateCountryDto: UpdateCountryDto): Promise<Country> {
    return this.countriesDataSource.update(updateCountryDto);
  }
  get(getCountryDto: GetCountryDto): Promise<Country> {
    return this.countriesDataSource.get(getCountryDto);
  }
  getAll(): Promise<Country[]> {
    return this.countriesDataSource.getAll();
  }
  delete(deleteCountryDto: DeleteCountryDto): Promise<{}> {
    return this.countriesDataSource.delete(deleteCountryDto);
  }
}
