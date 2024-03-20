import LoginForm from '@/components/auth/LoginForm';
import CardWrapper from '@/components/auth/CardWrapper';

const LoginPage = () => {
  return (
    <CardWrapper
      headerTitle="Welcome back"
      backBtnTitle="Don't have an account?"
      backBtnHref="/auth/register"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default LoginPage;
