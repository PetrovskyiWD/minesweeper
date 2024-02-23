import { type FC } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Reset from './Reset.component';

describe('Reset button check', () => {
  const ResetWithDummyHandler: FC = () => <Reset handleReset={() => null} />;

  it('Should render elements with default state', () => {
    render(<ResetWithDummyHandler />);

    expect(screen.getByText('🙂')).toBeInTheDocument();
  });

  it('handleReset handler should be called', () => {
    const handleReset = jest.fn();

    render(<Reset handleReset={handleReset} />);
    fireEvent.click(screen.getByText('🙂'));

    expect(handleReset).toBeCalled();
  });

  it('Should change state when onMouseDown and onMouseUp events happened', () => {
    render(<ResetWithDummyHandler />);

    fireEvent.mouseDown(screen.getByText('🙂'));
    expect(screen.getByText('😯')).toBeInTheDocument();

    fireEvent.mouseUp(screen.getByText('😯'));
    expect(screen.getByText('🙂')).toBeInTheDocument();
  });

  it('Should change state when onMouseDown and onMouseLeave events happened', () => {
    render(<ResetWithDummyHandler />);

    fireEvent.mouseDown(screen.getByText('🙂'));
    expect(screen.getByText('😯')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText('😯'));
    expect(screen.getByText('🙂')).toBeInTheDocument();
  });
});
