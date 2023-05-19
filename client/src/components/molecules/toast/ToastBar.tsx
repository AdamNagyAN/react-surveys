import { Toast } from 'react-daisyui';
import { XMarkIcon } from '@heroicons/react/24/solid';

export interface ToastBarProps {
  title?: string;
  message?: string;
  open?: boolean;
  onClose?: () => void;
}
const ToastBar = ({ message, open, title, onClose }: ToastBarProps) => {
  if (!open) return null;
  return (
    <Toast
      className="alert alert-error max-w-[400px]"
      vertical="bottom"
      horizontal="end"
    >
      <div className="relative w-full h-full flex flex-col">
        <button
          onClick={onClose}
          className="btn btn-sm btn-ghost absolute right-0 top-0"
        >
          <XMarkIcon className="icon-sm" />
        </button>
        <p>{title}</p>
        <p>{message}</p>
      </div>
    </Toast>
  );
};

export default ToastBar;
