import { Router } from 'express';
import { CountriesDataSourceImpl, CountryRepositoryImpl } from '../../infrastructure';
import { CountryController } from './controller';

export class CountryRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new CountriesDataSourceImpl();
    const countryRepository = new CountryRepositoryImpl(dataSource);

    const controller = new CountryController(countryRepository);

    // routes
    router.post('/create', controller.createCountry);
    router.put('/update/:id', controller.updateCountry);
    router.delete('/delete/:id', controller.deleteCountry);
    router.get('/get/:id', controller.getCountry);
    router.get('/get-all', controller.getAllCountries);
    
    return router;
  }
}