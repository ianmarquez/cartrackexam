import React from 'react';
import styled from 'styled-components';
import { User } from '../models/User';

const Card = styled.div`
  text-align: center;
  margin: 20px auto 20px !important;
  max-width: 400px;
  min-width: 320px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  flex: 0 1 50%;
`;

const Divider = styled.hr`
border-top: 2px solid #ccc;
`;

const CardSection = styled.div`
  text-align: left;
  position: relative;
`

const CompanyDetails = styled.p`
  font-style: italic;
`

const CallButton = styled.button`
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`

const UserCard = (props: User) => {
  const { name, email, website, phone, address: { street, suite, city, zipcode, geo }, company } = props;
  const { name: companyName, catchPhrase, bs } = company;

  const onButtonClick = () => {
    alert(`calling ${phone}`)
  }

  return <Card>
    <CardSection>
      <CallButton onClick={onButtonClick}>Call</CallButton>
      <h3 style={{ maxWidth: 320, textOverflow: 'ellipsis'}}>{name}</h3>
      <h5>{phone}</h5>
      <h5 className="subheading">{email}</h5>
      <a href={`https://www.${website}`}>{website}</a>
    </CardSection>
    <Divider/>
    <CardSection>
      <h4 className="subheading">Company</h4>
      <h5>{companyName}</h5>
      <CompanyDetails>{ catchPhrase }, {bs}</CompanyDetails>
    </CardSection>
    <Divider/>
    <CardSection>
      <h4 className="subheading">Address</h4>
      <p>{street} {suite}, {city} {zipcode}</p>
    </CardSection>
  </Card>
}

export default UserCard;