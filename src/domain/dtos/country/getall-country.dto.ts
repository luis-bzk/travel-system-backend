import { isValidObjectId } from "mongoose";

export class GetAllCountryDto {
    constructor(public id: string) { }

    static create(id: string): [string?, GetAllCountryDto?] {
        // make validation
        if (!isValidObjectId(id)) return ['El id del país no es valido'];

        return [undefined, new GetAllCountryDto(id)];
    }
}