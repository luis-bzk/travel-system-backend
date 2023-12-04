export class CreateCategoryDto {
  constructor(public name: string, public description: string) {}

  static create(object: { [key: string]: any }): [string?, CreateCategoryDto?] {
    const { name, description } = object;

    return [undefined, new CreateCategoryDto(name, description)];
  }
}
