import { isValidObjectId } from "mongoose";

export class GetCountryDto {
    constructor(public id: string) { }
    static create(id: string): [string?, GetCountryDto?] {
        // make validation
        if (!isValidObjectId(id)) return ['El id del país no es válido'];

        return [undefined, new GetCountryDto(id)];
    }
}
