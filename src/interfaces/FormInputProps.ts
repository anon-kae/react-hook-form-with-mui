export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  rules: {
    required: boolean;
    pattern?: RegExp;
  }
}