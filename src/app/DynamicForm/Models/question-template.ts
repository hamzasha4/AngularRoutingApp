export class QuestionTemplate {
  label: string;
  placeholder: string;
  key: string;
  value: any;
  type: string;
  input: true;
  data: {
    values: Array<{ value: string; label: string }>;
  };
  validate: { required: boolean };
  constructor() {}
}
