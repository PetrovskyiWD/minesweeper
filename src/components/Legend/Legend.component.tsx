import styled from '@emotion/styled';

const Legend = (): JSX.Element => {
  return (
    <Parent>
      <strong>Flag: </strong>
      <FlagComboParent>
        <Key>ctrl</Key> + <Click>click</Click>
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

const Key = styled.span`
  color: #ec433c;
`;

const Click = styled.span`
  color: #2a48ec;
`;

export default Legend;
