import React, { createContext, useContext, useState } from 'react';
import ToastBar, { type ToastBarProps } from './ToastBar';

export interface GlobalToastBarProps extends ToastBarProps {
  open?: boolean;
}

const initialValue = {
  toastBar: {
    message: '',
    title: '',
    open: false,
  },
  setToastBar: (state: GlobalToastBarProps) => {
    return state;
  },
};

export const ToastBarContext = createContext<{
  // eslint-disable-next-line no-unused-vars
  setToastBar: (state: GlobalToastBarProps) => void;
}>(initialValue);

interface ToastBarProviderProps extends ToastBarProps {
  children?: React.ReactNode;
}

export const ToastBarProvider = ({ children }: ToastBarProviderProps) => {
  const [toastBar, setToastBar] = useState<GlobalToastBarProps>(
    initialValue.toastBar
  );

  const setToastBarOpen = React.useCallback(
    (state: GlobalToastBarProps) => {
      setToastBar({
        ...state,
        open: true,
      });
    },
    [setToastBar]
  );

  const contextValue = React.useMemo(() => {
    return {
      setToastBar: setToastBarOpen,
    };
  }, [setToastBarOpen]);

  return (
    <ToastBarContext.Provider value={contextValue}>
      {children}
      <ToastBar
        onClose={() => {
          setToastBar({ ...toastBar, open: false });
        }}
        {...toastBar}
      />
    </ToastBarContext.Provider>
  );
};

// eslint-disable-next-line no-unused-vars
export const useToastBar = (): ((state: GlobalToastBarProps) => void) => {
  return useContext(ToastBarContext).setToastBar;
};
