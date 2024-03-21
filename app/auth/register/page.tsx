import RegisterForm from '@/components/auth/RegisterForm';
import CardWrapper from '@/components/auth/CardWrapper';

const RegisterPage = () => {
  return (
    <CardWrapper
      headerTitle="Create an account"
      backBtnTitle="Already have an account?"
      backBtnHref="/auth/login"
      showSocial
    >
      <RegisterForm />
    </CardWrapper>
  );
};

export default RegisterPage;
