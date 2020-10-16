import { act, renderHook } from '@testing-library/react-hooks';
import useCtrlKey from '.';

describe('useCtrlKey', (): void => {
  it('should default to false', (): void => {
    const { result } = renderHook(useCtrlKey);
    expect(result.current).toBe(false);
  });

  it('should listen for keyboard events on mount', (): void => {
    const windowAddEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'addEventListener',
    );
    renderHook(useCtrlKey);

    expect(windowAddEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
    expect(windowAddEventListener).toHaveBeenCalledWith(
      'keyup',
      expect.any(Function),
    );
  });

  it('should respond to Ctrl keydown events', (): void => {
    const { result } = renderHook(useCtrlKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true }));
    });

    expect(result.current).toBe(true);
  });

  it('should respond to non-Ctrl keydown events', (): void => {
    const { result } = renderHook(useCtrlKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: false }));
    });

    expect(result.current).toBe(false);
  });

  it('should respond to Ctrl keyup events', (): void => {
    const { result } = renderHook(useCtrlKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keyup', { ctrlKey: true }));
    });

    expect(result.current).toBe(true);
  });

  it('should respond to non-Ctrl keyup events', (): void => {
    const { result } = renderHook(useCtrlKey);

    act((): void => {
      window.dispatchEvent(new KeyboardEvent('keyup', { ctrlKey: false }));
    });

    expect(result.current).toBe(false);
  });

  it('should stop listening for keyboard events on unmount', (): void => {
    const windowRemoveEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'removeEventListener',
    );
    const { unmount } = renderHook(useCtrlKey);

    unmount();

    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      'keyup',
      expect.any(Function),
    );
  });
});
