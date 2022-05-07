import React from "react";
import styled from "styled-components";

interface Props {
  _onClick?: () => {};
  children?: string;
  isCategory?: boolean;
  isLimit?: boolean;
  width?: string;
}

const Button = ({ children, isCategory, width, isLimit, _onClick }: Props) => {
  if (isCategory) {
    return (
      <React.Fragment>
        <CategoryButton>{children}</CategoryButton>
      </React.Fragment>
    );
  }

  if (isLimit) {
    return (
      <React.Fragment>
        <LimitButton width={width} onClick={_onClick}>
          {children}
        </LimitButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <CommonButton width={width}>{children}</CommonButton>
    </React.Fragment>
  );
};

const CategoryButton = styled.button`
  width: 56px;
  height: 30px;
  background-color: #c4c4c4;
  border: none;
  border-radius: 15px;
  margin: 0px 10px 0px 10px;
`;

interface CommonButtonProps {
  width?: string;
}

const LimitButton = styled.button<CommonButtonProps>`
  width: ${(props) => props.width ?? "56px"};
  height: 30px;
  background-color: #eeeeee;
  border-radius: 15px;
  margin: 0px 10px 0px 10px;
`;

const CommonButton = styled.button<CommonButtonProps>`
  width: ${(props) => props.width ?? ""};
  outline: none;
  background: yellow;
  padding: 20px;
  box-sizing: border-box;
  :hover {
    background: red;
  }
`;
export default Button;
