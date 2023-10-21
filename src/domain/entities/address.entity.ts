export class Address {
  constructor(
    public id: string,
    public id_city: string,
    public id_province: string,
    public id_country: string,
    public main_street: string,
    public secondary_street: string,
    public postal_code: string
  ) {}
}
