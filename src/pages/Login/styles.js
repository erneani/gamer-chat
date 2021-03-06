import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #533a71;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LoginCard = styled.div`
  background-color: #ffffff;
  box-shadow: 5px 5px 0 #50c5b7;
  border-radius: 5px;
  max-width: 400px;
  min-width: 250px;
  padding: 2.5rem 1.5rem;
  width: 40%;
`;

export const CardTitle = styled.h1`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 32px;
  color: #6184d8;
`;

export const CardInputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

export const CardInputLabel = styled.label`
  font-weight: normal;
  margin-bottom: 0.25rem;
`;

export const CardInput = styled.input`
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${(props) => (props.error ? "#db162f" : "#6184d8")};
  background-color: ${(props) => (props.error ? "#db162f" : "#6184d8")};
  color: #ffffff;

  transition: 0.3s;

  &:focus {
    border-left: 5px solid #50c5b7;
  }
`;

export const CardInputHelper = styled.span`
  margin-top: 0.25rem;
  text-align: right;
  font-size: 12px;
  opacity: 0.6;
`;

export const CardError = styled.span`
  margin-top: 0.25rem;
  text-align: right;
  font-size: 12px;
  color: #db162f;
`;

export const CardButton = styled.button`
  background-color: #6184d8;
  border-radius: 5px;
  margin-left: -5px;
  box-shadow: 5px 5px 0 #50c5b7;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  color: #ffffff;
  width: calc(100% + 5px);

  transition: 0.3s;

  &:hover {
    transform: translate(5px, 5px);
    box-shadow: 0 0 0 #50c5b7;
  }
`;

export const LoginError = styled.div`
  background-color: #db162f;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  color: #ffffff;
`;
