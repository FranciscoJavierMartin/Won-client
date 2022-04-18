import Heading from '@/components/Heading';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
export type FormProfileProps = {};

const FormProfile: React.FC<FormProfileProps> = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        label="Email"
        initialValue="john@doe.com"
        disabled
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
      />
      <TextField
        type="password"
        name="newPassword"
        placeholder="New Password"
        label="New Password"
      />
      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
);

export default FormProfile;
