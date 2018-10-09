import React, {Component} from 'react';
import { Link } from 'react-router-native'
import {  View } from 'react-native';
//import {connect} from 'react-redux';
//import HomeScreen from "./HomeScreen.js";
//import * as actions from '../actions';
import { Container, Header, Title, Content, Footer,Item,Input,List,ListItem,Badge,Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text,Card, CardItem } from 'native-base';

export default class SearchTrip extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
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
         <FooterTab>
            <Button vertical>
               <Icon name="apps" />
              <Text>Dashboad</Text>
            </Button>
            <Button badge vertical>
             <Badge><Text>2</Text></Badge>
              <Icon name="ios-clipboard" />
              <Text>Todo</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>5</Text></Badge>
              <Icon active name="md-paper-plane" />
              <Text>Trip</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-people" />
              <Text>Gang</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



//export default connect(null, actions)(SearchTrip);