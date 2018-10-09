import React, {Component} from 'react';

import { Link } from 'react-router-native'
import {  View } from 'react-native';
import FooterContent from '../General/Footer';
import { Container, Textarea, Form, Header, Title, Content, Footer,Item,Input,List,ListItem,Badge,Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text,Card, CardItem } from 'native-base';

export default class TripDetails extends Component {
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
            <Title>Trip Details</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-more' />
            </Button>
          </Right>
       </Header>
        <Content contentContainerStyle={{flex:1, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center' }}>
         <Form>
          <Item>
            <Input placeholder="Name" />
          </Item>
             <Item>
            <Input placeholder="Description" />
                 </Item>
         <Button full rounded success style={{marginTop: 10}}>
             <Link to="/searchDestination">
            <Text>Next</Text></Link>
          </Button>
        </Form>
        </Content>
        <Footer>
            <FooterContent/>
        </Footer>
      </Container>
    );
  }
}



//export default connect(null, actions)(Home);