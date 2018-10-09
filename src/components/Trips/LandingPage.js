import React, {Component} from 'react';
import { Link } from 'react-router-native'
import {  View } from 'react-native';
//import {connect} from 'react-redux';
//import HomeScreen from "./HomeScreen.js";
//import * as actions from '../actions';
import FooterContent from '../General/Footer';
import { Container, Header, Title, Content, Footer,Item,Input,List,ListItem,Badge,Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text,Card, CardItem } from 'native-base';

export default class LandingPage extends Component {
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
            <Title>Trip Gang</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-more' />
            </Button>
          </Right>
       </Header>
        <Content contentContainerStyle={{flex:1, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/tripDetails">
          <Text>                
            <Icon name="md-add" />Click here to plan a trip
          </Text>    
        </Link>
        </Content>
        <Footer>
            <FooterContent/>
        </Footer>
      </Container>
    );
  }
}



//export default connect(null, actions)(SearchTrip);