import React, {Component} from 'react';
import { Link } from 'react-router-native'
import {  View } from 'react-native';
//import {connect} from 'react-redux';
//import HomeScreen from "./HomeScreen.js";
//import * as actions from '../actions';
import FooterContent from '../General/Footer';
import { Container, Header, Title, Content, Footer,Item,Input,List,ListItem,Badge,Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text,Card, CardItem } from 'native-base';

export default class SearchTrip extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>My Trips</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-more' />
            </Button>
          </Right>
       </Header>
        <Content>

           <List>
            <ListItem avatar>  
            <Left>
                <Icon name='md-paper-plane' />
              </Left>            
              <Body>             
                <Text>Kasauli hill resort</Text>
                <Text note>May 2017</Text>
              </Body>
            </ListItem>
            <ListItem avatar>  
              <Left>
                <Icon name='md-paper-plane' />
              </Left>            
              <Body>                        
                <Text>Pinjore</Text>
                <Text note>June 2016</Text>
              </Body>
            </ListItem>
             <ListItem avatar>  
              <Left>
                <Icon name='md-paper-plane' />
              </Left>            
              <Body>                        
                <Text>Uttrakhand</Text>
                <Text note>Aug 2015</Text>
              </Body>
            </ListItem>
             <ListItem avatar>  
              <Left>
                <Icon name='md-paper-plane' />
              </Left>            
              <Body>                        
                <Text>Belgium</Text>
                <Text note>Mar 2015</Text>
              </Body>
            </ListItem>
           </List>
          

        </Content>
        <Footer>
         <FooterContent/>
        </Footer>
      </Container>
    );
  }
}



//export default connect(null, actions)(SearchTrip);