import { inquirer } from '../base/inquirer';
import { Result } from '../base/interface';
import { sortCatalog } from './sortCatalog';

const common = (): void => {
  // 问题路线：看 questionList.ts
  const questionList = [
    {
      type: 'list',
      message: '请问需要什么服务？',
      choices: ['公共服务', '文件管理']
    },
    {
      type: 'list',
      message: '当前公共服务有：',
      choices: ['文件排序']
    },
    {
      type: 'input',
      message: '需要排序的文件夹为？（绝对路径）',
      default: 'D:/xx',
    },
    {
      type: 'list',
      message: ''
    }
  ];

  const answerList = [
    async (result: Result, questions: any) => {
      if (result.answer === '公共服务') {
        questions[1]();
      } else if (result.answer === '其他') {
        // 做其他事情
        console.log('暂未开通该服务');
      }
    },
    async (result: Result, questions: any) => {
      console.log(result);
      if (result.answer === '文件排序') {
        questions[2]();
      }
    },
    async (result: Result) => {
      const sortResult = await sortCatalog(result.answer);
      if (sortResult) {
        console.log('排序成功！');
      }
    },
  ];

  inquirer(questionList, answerList);
};

export default common;
