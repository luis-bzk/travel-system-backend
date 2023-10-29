import { Request, Response } from 'express';
import { CustomError } from '../../domain/errors';
import { AddressRepository } from '../../domain/repositories';
import { CreateAddress, GetAddress, UpdateAddress } from '../../domain/use-cases';
import { CreateAddressDto, GetAddressDto, UpdateAddressDto } from '../../domain/dtos';

export class AddressController {
  constructor(private readonly addressRepository: AddressRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  };

  createAddress = (req: Request, res: Response) => {
    const [error, createAddressDto] = CreateAddressDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateAddress(this.addressRepository)
      .execute(createAddressDto!)
      .then((data) => res.status(201).json(data))
      .catch((error) => this.handleError(error, res));
  };

  updateAddress = (req: Request, res: Response) => {
    const [error, updateAddressDto] = UpdateAddressDto.create(req.body, req.params.id);
    if (error) return res.status(400).json({ error });

    new UpdateAddress(this.addressRepository)
      .execute(updateAddressDto!)
      .then((data) => res.status(200).json(data))
      .catch((error) => this.handleError(error, res));
  };

  getAddress = (req: Request, res: Response) => {
    const [error, getAddressDto] = GetAddressDto.create(req.params.id);
    if (error) return res.status(400).json({ error });

    new GetAddress(this.addressRepository)
      .execute(getAddressDto!)
      .then((data) => res.status(200).json(data))
      .catch((error) => this.handleError(error, res));
  };
}
