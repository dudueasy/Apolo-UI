import React from 'react';

interface Props {
  title?: string
}

const ExampleWrapper: React.FC<Props> = (props) => {
  const {title, children} = props;

  return <>
    <div
      style={{
        border: '1px solid rgba(0,0,0,0.1)',
        padding: 8,
        marginTop: 16,
        marginBottom: 16
      }}
    >
      {children}
    </div>
  </>;
};

export {ExampleWrapper} ;
