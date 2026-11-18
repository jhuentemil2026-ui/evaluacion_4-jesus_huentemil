import type { StatusMessageProps } from '../../types';
import './StatusMessage.css';

export function StatusMessage({ kind, message }: StatusMessageProps) {
  const isError = kind === 'error';

  return (
    <div
      className={isError ? 'status-message status-message--error' : 'status-message'}
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
    >
      {message}
    </div>
  );
}