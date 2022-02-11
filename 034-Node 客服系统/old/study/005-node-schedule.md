005-node-schedule
===

> Create by **jsliang** on **2022-02-09 20:50:47**  
> Recently revised in **2022-02-09 20:50:47**

* 安装：`npm i node-schedule`
* 使用：

```js
import schedule from 'node-schedule';

await schedule.scheduleJob('0 0 9 * * 5', async () => {
  await retryAgain(doFunc, 10, 60 * 1000);
});
```

```js
/**
 * @name node-schedule
 * scheduleJob 用法：
  *  *  *  *  *  *
  ┬  ┬  ┬  ┬  ┬  ┬
  │  │  │  │  │  |
  │  │  │  │  │  └ 星期几，取值：0 - 7，其中 0 和 7 都表示是周日
  │  │  │  │  └─── 月份，取值：1 - 12
  │  │  │  └────── 日期，取值：1 - 31
  │  │  └───────── 时，取值：0 - 23
  │  └──────────── 分，取值：0 - 59
  └─────────────── 秒，取值：0 - 59（可选）
  */

// 工作日：
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [1, 2, 3, 4, 5];
rule.hour = 18;
rule.minute = 0;
rule.second = 0;
await schedule.scheduleJob(rule, async () => {
  await doSomething();
});
```