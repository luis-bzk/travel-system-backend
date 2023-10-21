import { CreateCountryDto, DeleteCountryDto, GetCountryDto, UpdateCountryDto } from "../dtos";
import { Country } from "../entities";

export abstract class CountriesDataSource {
    abstract create(createCountryDto: CreateCountryDto): Promise<Country>;
    abstract update(updateCountryDto: UpdateCountryDto): Promise<Country>;
    abstract delete(deleteCountryDto: DeleteCountryDto): Promise<{}>;
    abstract get(getCountryDto: GetCountryDto): Promise<Country>;
    abstract getAll(): Promise<Country[]>;
  }