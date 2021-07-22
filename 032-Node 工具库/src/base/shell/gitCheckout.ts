import shell from 'shelljs';

/**
 * @name 切换分支
 * @description 指令合并：
 * 1. git checkout ${branch}
 * 2. git pull
 * @param {string} branch 分支名
 */
export const gitCheckout = (branch: string): boolean => {
  if (!shell.which('git')) {
    shell.echo('Error: 请先安装 Git！');
    shell.exit(1);
  }

  console.log('开始切换分支：');
  const checkoutResult = shell.exec(`git checkout ${branch}`);
  if (checkoutResult.code !== 0) {
    shell.echo('Error: 切分支失败！');
    shell.exit(1);
  }

  console.log('开始拉取代码，请稍等：');
  const pullResult = shell.exec('git pull');
  const { stdout, stderr } = pullResult;
  if (pullResult.code === 0) {
    if (stdout.includes('from the remote, but no such ref was fetched.')) {
      console.log('你的分支是最新的');
    } 
  } else if (pullResult.code === 1) {
    if (stderr.includes('There is no tracking information for the current branch.')) {
      console.log('不存在远程分支');
    }
  }

  return true;
};