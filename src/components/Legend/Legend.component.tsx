import { type FC } from 'react';
import styled from '@emotion/styled';

export interface LegendProps {
  feature: string;
  firstAction: string;
  secondAction: string;
}

const Legend: FC<LegendProps> = ({ feature, firstAction, secondAction }) => {
  return (
    <Parent>
      <strong>{feature}:&nbsp;</strong>
      <FlagComboParent>
        <FirstAction>{firstAction}</FirstAction>
        &nbsp;+&nbsp;
        <SecondAction>{secondAction}</SecondAction>
      </FlagComboParent>
    </Parent>
  );
};

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const FlagComboParent = styled.code`
  background-color: #e3e3e3;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;

const SecondAction = styled.span`
  color: #2a48ec;
`;

export default Legend;
