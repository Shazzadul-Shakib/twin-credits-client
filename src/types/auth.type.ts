export type TLoginFormInputs = {
  email: string;
  password: string;
};

export type TRegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  referredCode?: string;
};

export type TSubmitButtonProps = {
  isSubmitting: boolean;
  text: string;
  loadingText?: string;
  className?: string;
};

export interface IUser {
  _id: string;
  name: string;
  email: string;
  credits: number;
  referralCode: string;
}
