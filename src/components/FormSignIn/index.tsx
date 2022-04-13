import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import * as S from './styles';

export type FormSignInProps = {
  test?: boolean;
};

const FormSignIn: React.FC<FormSignInProps> = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign In now
      </Button>
      <S.FormLink>
        Don&apos;t have and account?{' '}
        <Link href="/sign-p">
          <a>Sign Up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
);

export default FormSignIn;
