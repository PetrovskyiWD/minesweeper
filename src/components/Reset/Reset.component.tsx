import styled from '@emotion/styled';
import { useState, type FC } from 'react';

interface ResetProps {
  handleReset: () => void;
}

const Reset: FC<ResetProps> = ({ handleReset }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = (): void => {
    setMouseDown(true);
  };
  const handleMouseUp = (): void => {
    setMouseDown(false);
  };

  return (
    <Button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleReset}
    >
      {mouseDown ? '😯' : '🙂'}
    </Button>
  );
};

const Button = styled.button`
  padding: 0.2em 0.3em;
  background-color: #ededed;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export default Reset;
