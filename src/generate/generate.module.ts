import { Module } from '@nestjs/common';
import { GenerateCommand } from './generate.command';

@Module({
  providers: [GenerateCommand],
})
export class GenerateModule {}
