import program from 'commander';

program
  .version('0.0.1')
  .description('小工具指令清单')
  .option('-s, --sort <path>', '排序功能', '')

program.parse(process.argv);