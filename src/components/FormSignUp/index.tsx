import Link from 'next/link';
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import * as S from './styles';

export type FormSignUpProps = {
  test?: boolean;
};

const FormSignUp: React.FC<FormSignUpProps> = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <S.FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
);

export default FormSignUp;
