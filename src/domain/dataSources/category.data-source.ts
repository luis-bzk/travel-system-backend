import { CreateCategoryDto } from '../dtos/category';
import { Category } from '../entities';

export abstract class CategoryDAtaSource {
  abstract create(createCategoryDto: CreateCategoryDto): Promise<Category>;
}
