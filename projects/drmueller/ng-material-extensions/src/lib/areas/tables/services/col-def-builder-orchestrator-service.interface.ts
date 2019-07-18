import { ColumnDefinitionsContainer } from '../models';

import { IColDefBuilderService } from '.';

export interface IColDefBuilderOrchestratorService<T> {
  withColumn(columnKey: string, headerDescription: string, className?: string): IColDefBuilderService<T>;
  build(): ColumnDefinitionsContainer;
}
