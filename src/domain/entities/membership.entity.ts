export class Membership {
  constructor(
    public id: string,
    public id_plan: string,
    public years: number,
    public finish_date: Date,
    public totalCost: number,
    public status: boolean
  ) {}
}
