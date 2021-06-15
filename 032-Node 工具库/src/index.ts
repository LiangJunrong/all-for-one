import program from 'commander';
import { sortCatalog } from './sortCatalog';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('sort <path>')
  .description('文件排序功能。示例：npm run sort "docs" 或者 npm run sort " C:/code/jsliang/src/docs"')
  .action((path: string) => {
    sortCatalog(`../${path}`); // 为了更便捷，先退一层到外边
  });

program.parse(process.argv);