import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { MetaMaskContext } from '../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 7.6rem;
  margin-bottom: 7.6rem;
  ${({ theme }) => theme.mediaQueries.small} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: auto;
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 2.4rem;
  text-align: center;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary.default};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 64.8rem;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
`;

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.background.alternative};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  color: ${({ theme }) => theme.colors.text.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;

  & > * {
    margin: 0;
  }
  ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 1.2rem;
    padding: 1.6rem;
  }
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error.muted};
  border: 1px solid ${({ theme }) => theme.colors.error.default};
  color: ${({ theme }) => theme.colors.error.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1.6rem;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
    max-width: 100%;
  }
`;

const Dispute = () => {
  const [state] = useContext(MetaMaskContext);

  const [reporterAddress, setReporterAddress] = useState('0x...');
  const [reportedAddress, setReportedAddress] = useState('0x...');
  const [message, setMessage] = useState(
    'I want to dispute that report. blahblahblah',
  );
  const { TextArea } = Input;

  return (
    <Container>
      <Heading>
        let's <Span>dispute</Span>
      </Heading>
      <Subtitle>for disputing an existing report, it's here.</Subtitle>
      <CardContainer>
        {state.error && (
          <ErrorMessage>
            <b>An error happened:</b> {state.error.message}
          </ErrorMessage>
        )}
      </CardContainer>
      <Notice>
        <p>Dispute:</p>
        <p> Reporter tx address:</p>
        <Input
          placeholder={reporterAddress}
          onChange={(e) => {
            setReporterAddress(e.target.value);
          }}
        />
        <p> Dao address of the reporter address</p>
        <div style={{ margin: 8 }}>
          <Input
            placeholder={reportedAddress}
            onChange={(e) => {
              setReportedAddress(e.target.value);
            }}
          />

          <p> Put a message with your report : </p>
          <TextArea
            placeholder={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button
            style={{ marginTop: 8 }}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              console.log(reporterAddress);
            }}
          >
            Dispute
          </Button>
        </div>
      </Notice>
    </Container>
  );
};

export default Dispute;
