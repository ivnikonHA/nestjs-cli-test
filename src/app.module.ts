import { Module } from '@nestjs/common';

import { CowSayModule } from './cow-say/cow-say.module';
import { GenerateModule } from './generate/generate.module';

@Module({
  imports: [CowSayModule, GenerateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
