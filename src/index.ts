import { useEffect, useState } from 'react';

export default function useCtrlKey(): boolean {
  const [ctrlKey, setCtrlKey] = useState(false);

  useEffect((): (() => void) => {
    const handleChange = (e: KeyboardEvent): void => {
      setCtrlKey(e.ctrlKey);
    };
    window.addEventListener('keydown', handleChange);
    window.addEventListener('keyup', handleChange);
    return (): void => {
      window.removeEventListener('keydown', handleChange);
      window.removeEventListener('keyup', handleChange);
    };
  }, []);

  return ctrlKey;
}
