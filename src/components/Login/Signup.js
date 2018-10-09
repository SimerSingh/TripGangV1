import React, { Component } from 'react';
import { Link } from 'react-router-native'
import { Icon, Title, Left, Body, Button, Label, Text, Container, Header, Content, Form, Item, Input, Spinner, Grid, Col } from 'native-base';
export default class Signup extends Component {
  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
            <Link to="/">    
              <Icon name='arrow-back' />
            </Link>
            </Button>
          </Left>
          <Body>
            <Title>Sign up</Title>
          </Body>
        </Header>
        <Content style={{marginTop: 100}}>
       <Form>
        <Item>
            <Input placeholder="Name" />
          </Item>
          <Item>
            <Input placeholder="Email" />
          </Item>
        <Item>
            <Input placeholder="Password" />
          </Item>
         <Item>
            <Input placeholder="Phone number" />
          </Item>
           
          <Button full rounded>
            <Text>Sign up</Text>
          </Button> 
          
          </Form>
        </Content>
        </Container>
    
    );
  }
}