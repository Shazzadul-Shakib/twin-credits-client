export type TLoginFormInputs = {
  email: string;
  password: string;
};

export type TRegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  referralCode?: string;
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
  creadits: number;
  referralCode: string;
}
