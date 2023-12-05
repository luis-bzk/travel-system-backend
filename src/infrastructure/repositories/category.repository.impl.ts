import { Category } from '../../domain/entities';
import { CategoryDAtaSource } from '../../domain/dataSources';
import { CreateCategoryDto } from '../../domain/dtos/category';
import { CategoryRepository } from '../../domain/repositories';

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(private readonly categoryDataSource: CategoryDAtaSource) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryDataSource.create(createCategoryDto);
  }
}
