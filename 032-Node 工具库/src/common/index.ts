import { inquirer } from '../base/inquirer';
import { Result } from '../base/interface';
import { sortCatalog } from './sortCatalog';
import { downLoadExcel } from './language/download';
import { importLanguage } from './language/import';
import { exportLanguage } from './language/export';

// 问题记录器
const answers = {
  q0: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
};

const common = (): void => {
  // 问题路线：看 questionList.ts
  const questionList = [
    // q0
    {
      type: 'list',
      message: '请问需要什么服务？',
      choices: ['公共服务', '多语言']
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
      message: '请问多语言需要什么支持？',
      choices: [
        '下载多语言资源',
        '导入多语言资源',
        '导出多语言资源',
      ],
    },
    // q4
    {
      type: 'input',
      message: '资源下载地址（HTTP）？',
      default: 'https://www.kdocs.cn/l/sdwvJUKBzkK2',
    }
  ];

  const answerList = [
    // q0 - 请问需要什么服务？
    async (result: Result, questions: any) => {
      answers.q0 = result.answer;
      switch (result.answer) {
        case '公共服务':
          questions[1]();
          break;
        case '多语言':
          questions[3]();
          break;
        default: break;
      }
    },
    // q1 - 当前公共服务有：
    async (result: Result, questions: any) => {
      answers.q1 = result.answer;
      if (result.answer === '文件排序') {
        questions[2]();
      }
    },
    // q2 - 需要排序的文件夹为？（绝对路径）
    async (result: Result, _questions: any, prompts: any) => {
      answers.q2 = result.answer;
      const sortResult = await sortCatalog(result.answer);
      if (sortResult) {
        console.log('排序成功！');
        prompts.complete();
      }
    },
    // q3 - 请问多语言需要什么支持？
    async (result: Result, questions: any, prompts: any) => {
      answers.q3 = result.answer;
      switch (result.answer) {
        case '下载多语言资源':
        case '导入多语言资源':
          questions[4]();
          break;
        case '导出多语言资源':
          const exportResult = await exportLanguage();
          if (exportResult) {
            console.log('导出成功！');
            prompts.complete();
          }
        default: break;
      }
    },
    // q4 - 资源下载地址（HTTP）？
    async (result: Result) => {
      answers.q4 = result.answer;
      const download = async (): Promise<any> => {
        const downloadResult = await downLoadExcel(result.answer);
        if (downloadResult) {
          console.log('下载成功！');
          return true;
        }
      };
      switch (answers.q3) {
        case '下载多语言资源':
          await download();
          break;
        case '导入多语言资源':
          await download();
          const importResult = await importLanguage();
          if (importResult) {
            console.log('导入完毕！');
          }
        default:
          break;
      }
    },
  ];

  inquirer(questionList, answerList);
};

export default common;
