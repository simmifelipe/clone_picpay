import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}></Avatar>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@felipe.simmi</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Felipe Simmi</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" />
            <Date>há 2 anos</Date>
          </Details>
          
          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>

        </CardFooter>
      </Card>

    </Container>
  );
}
