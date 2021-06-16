import program from 'commander';
import common from './common';
import './base/console';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('jsliang')
  .description('jsliang 帮助指令')
  .action(() => {
    common();
  });

program
  .command('test')
  .description('测试频道')
  .action(() => {
    console.log('There is jsliang?', true);
    console.error('随便报个错，表明它有问题');
  });

program.parse(process.argv);