import React, {Component} from 'react';

import { Link } from 'react-router-native'
import {  View } from 'react-native';
import { Container, Header, Title, Content, Footer,Item,Input,List,ListItem,Badge,Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text,Card, CardItem } from 'native-base';

export default class FooterContent extends Component {
  render() {
    return (
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
              <Link to="/myTrips">
              <Text>Trips</Text>
              </Link>
            </Button>
            <Button vertical>
              <Icon name="ios-people" />
              <Text>Gang</Text>
            </Button>
          </FooterTab>
    );
  }
}



//export default connect(null, actions)(Home);