import React, { useState, useRef } from 'react';
import InputField from 'Atoms/InputField';
import Button from 'Atoms/Button';
import Stack from 'Atoms/Stack';

const MainDrawer = () => {
  const tokenRef = useRef(null);
  const [token, setToken] = useState();
  const handleClick = () => {
    setToken(tokenRef.current.value);
  };
  return (
    <>
      <Stack inline>
        <InputField help="get your token from exir.io" ref={tokenRef} />
        <Button onClick={handleClick}>login</Button>
      </Stack>
      <Stack>{token}</Stack>
    </>
  );
};
export default MainDrawer;
