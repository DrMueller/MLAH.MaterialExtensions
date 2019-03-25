import { ColumnDefinitionsContainer } from '../models';

import { IColDefBuilderService } from '.';

export interface IColDefBuilderOrchestratorService {
  withColumn(columnKey: string, headerDescription: string): IColDefBuilderService;
  build(): ColumnDefinitionsContainer;
}
