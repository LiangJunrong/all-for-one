export interface Question {
  type: string,
  name?: string,
  message: string,
  default?: string,
  choices?: string[],
  validate?(): boolean,
}

export interface Result {
  name: string,
  answer: string,
}