import React, {useState} from 'react';
import HighLight, {defaultProps} from 'prism-react-renderer';
import styled from 'styled-components';
import Button from './button/button';

interface Props {code: string}

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const SourceCodeWrapper = styled.div`
  transition: ALL 0.5s;
`;

const DemoWithCode: React.FC<Props> = (props) => {
  const {children, code} = props;
  const [sourceCodeVisible, toggleSourceCodeVisible] = useState<boolean>(false);

  return (
    <>
      <div>{children} </div>
      <div style={{marginBottom: 16, marginTop: 16}}>
        <Button onClick={(e) => toggleSourceCodeVisible(!sourceCodeVisible)}
                level={'important'}
        >显示源码</Button>
      </div>
      {sourceCodeVisible &&
      <SourceCodeWrapper>
        <HighLight {...defaultProps} language={'jsx'} code={code}>
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </HighLight>
      </SourceCodeWrapper>
      }
    </>
  );
};

export default DemoWithCode;
