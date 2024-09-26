import { Command, CommandRunner, Option } from 'nest-commander';

interface GenerateOptions {
  count?: number;
  path?: string;
  database?: string;
}

@Command({
  name: 'generate',
})
export class GenerateCommand extends CommandRunner {
  async run(param: string[], options: GenerateOptions): Promise<void> {
    console.log(`Count: ${options.count}`);
    console.log(`Count: ${options.path}`);
    console.log(`Count: ${options.database}`);
  }

  @Option({
    flags: '-c, --count [generate]',
    description: 'Number of products',
  })
  parseCount(val: string) {
    return Number(val);
  }

  @Option({
    flags: '-p, --path [path]',
    description: 'Path to file',
  })
  parsePath(val: string) {
    return val;
  }

  @Option({
    flags: '-d, --database [URI]',
    description: 'Connection string to database',
  })
  parseDatabase(val: string) {
    return val;
  }
}
