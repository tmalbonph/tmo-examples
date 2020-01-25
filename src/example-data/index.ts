import { EXAMPLE_COMPONENTS, LiveExample } from './example-list';

export class ExampleData {
  public exampleFiles: string[];
  public assetsFiles: string[] = [];
  public selectorName: string;
  public indexFilename: string;
  public description: string;
  public componentNames: string[] = [];
  public exampleName: string;

  constructor(example: string) {
    if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
      return;
    }
    this.exampleName = example;
    const exampleConfig = EXAMPLE_COMPONENTS[example];
    this.indexFilename = `${example}.component`;
    this.exampleFiles = ['html', 'ts', 'scss'].map(
      extension => `${this.indexFilename}.${extension}`
    );
    this.selectorName = exampleConfig.selectorName || `tmo-examples-${example}`;

    if (exampleConfig.additionalFiles) {
      this.exampleFiles.push(...exampleConfig.additionalFiles);
    }

    if (exampleConfig.assetsFiles) {
      this.assetsFiles = [...exampleConfig.assetsFiles];
    }

    this.description = `${exampleConfig.title || this.exampleName.replace(/[\-]+/g, ' ')} Example`;
    this.componentNames = [...exampleConfig.componentNames];
  }
}

export { LiveExample };
export { EXAMPLE_COMPONENTS };
