import { FiAlertTriangle } from 'react-icons/fi';

interface FormErrorProps {
  message: string;
}

const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="flex gap-2 items-center bg-red-400 p-4 rounded text-slate-800">
      <FiAlertTriangle size={20} color="#b91c1c" />
      {message}
    </div>
  );
};

export default FormError;
