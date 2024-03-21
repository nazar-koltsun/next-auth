import { FaCheck } from "react-icons/fa";

interface FormSuccessProps {
  message: string | undefined;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <div className="flex gap-2 items-center bg-green-400 p-4 rounded text-slate-800">
      <FaCheck size={20} color="#166534" />
      {message}
    </div>
  );
};

export default FormSuccess;
