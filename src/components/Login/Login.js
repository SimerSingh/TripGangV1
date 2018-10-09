import React, { Component } from 'react';
import { Link } from 'react-router-native'
import {  View } from 'react-native';
import { Icon, Body, Title,  Left, Right, Button, Label, Text, Container, Header, Content, Form, Item, Input, Spinner, Grid, Col } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
        <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
       <Form style={{marginTop: 100}}>
          <Item>
            <Input placeholder="Username" />
          </Item>
            <Item>
            <Input placeholder="Password" />
          </Item>
           
          <Button full rounded style={{marginTop: 10}}>
            <Link to="/landingPage">
            <Text>Login</Text></Link>
          </Button>
         
    
        <Button full rounded success style={{marginTop: 10}}>
             <Link to="/signup">
            <Text>Sign up</Text></Link>
          </Button>
        
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
           <Button rounded iconLeft light>
            <Icon name='logo-googleplus' />
            <Text>Login with G+</Text>
          </Button>
          <Button rounded iconLeft light>
            <Icon name='logo-facebook' />    
            <Text>Login with FB</Text>
            
          </Button>
          </View>
        
          </Form>
        </Content>
        </Container>
    
    );
  }
}