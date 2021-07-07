import { inquirer } from '../base/inquirer';
import { Result } from '../base/interface';
import { sortCatalog } from './sortCatalog';
import { downLoadExcel } from './language/download';

const common = (): void => {
  // 问题路线：看 questionList.ts
  const questionList = [
    // q0
    {
      type: 'list',
      message: '请问需要什么服务？',
      choices: ['公共服务', '文件管理']
    },
    // q1
    {
      type: 'list',
      message: '当前公共服务有：',
      choices: ['文件排序']
    },
    // q2
    {
      type: 'input',
      message: '需要排序的文件夹为？（绝对路径）',
    },
    // q3
    {
      type: 'list',
      message: '请问需要什么支持？',
      choices: ['多语言', 'Markdown 转 Word'],
    },
    // q4
    {
      type: 'list',
      message: '请问需要什么支持？',
      choices: [
        '下载多语言资源',
        '导入多语言资源',
        '导出多语言资源',
      ],
    },
    // q5
    {
      type: 'input',
      message: '资源下载地址（HTTP）？',
      default: 'https://www.kdocs.cn/l/sdwvJUKBzkK2',
    }
  ];

  const answerList = [
    // q0
    async (result: Result, questions: any) => {
      if (result.answer === '公共服务') {
        questions[1]();
      } else if (result.answer === '文件管理') {
        questions[3]();
      }
    },
    // q1
    async (result: Result, questions: any) => {
      if (result.answer === '文件排序') {
        questions[2]();
      }
    },
    // q2
    async (result: Result, _questions: any, prompts: any) => {
      const sortResult = await sortCatalog(result.answer);
      if (sortResult) {
        console.log('排序成功！');
        prompts.complete();
      }
    },
    // q3
    async (result: Result, questions: any) => {
      if (result.answer === '多语言') {
        questions[4]();
      }
    },
    // q4
    async (result: Result, questions: any) => {
      if (result.answer === '下载多语言资源') {
        questions[5]();
      }
    },
    // q5
    async (result: Result, _questions: any, prompts: any) => {
      if (result.answer) {
        const downloadResult = await downLoadExcel(result.answer);
        if (downloadResult) {
          console.log('下载成功！');
          prompts.complete();
        }
      }
    },
  ];

  inquirer(questionList, answerList);
};

export default common;
