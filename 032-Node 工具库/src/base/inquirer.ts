import * as myInquirer from 'inquirer';
import Rx from 'rxjs/Rx';
import { Question } from './interface';

export const inquirer = (questions: Question[], answers: any): void => {
  const prompts = new Rx.Subject();

  // 长度判断
  if (questions.length !== answers.length) {
    console.error('问题和答案长度不一致！');
  }

  // 问题列表
  const questionList = questions.map((item, index) => {
    return () => {
      prompts.next(Object.assign({}, item, {
        name: String(index),
      }));
    };
  });

  // 问题处理器
  myInquirer.prompt(prompts).ui.process.subscribe(async (res) => {
    console.log('执行成功，输入信息为：', res);
    const index = Number(res.name);
    
    // 回调函数：结果、问题列表、prompts（控制是否需要停止）
    answers[index](res, questionList, prompts);

    // 默认最后一个问题就自动终止
    if (index === answers.length - 1) {
      prompts.complete(); // 回调函数可以手动控制终止询问时机
    }
  }, (error: unknown) => {
    console.error('执行失败，报错信息为：', error);
  }, () => {
    // console.log('完成'); // 必定会执行的代码
  });

  // 执行第一个问题
  questionList[0]();
};