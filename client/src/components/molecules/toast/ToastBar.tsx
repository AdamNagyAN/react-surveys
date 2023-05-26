import { Toast } from 'react-daisyui';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { cn } from '../../../utils/utils';

export interface ToastBarProps {
  title?: string;
  message?: string;
  open?: boolean;
  onClose?: () => void;
  type?: 'success' | 'error';
}
const ToastBar = ({
  message,
  open,
  title,
  onClose,
  type = 'error',
}: ToastBarProps) => {
  if (!open) return null;
  const toastClasses = cn('alert max-w-[400px]', {
    'alert-error': type === 'error',
    'alert-success': type === 'success',
  });

  return (
    <Toast className={toastClasses} vertical="bottom" horizontal="end">
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
