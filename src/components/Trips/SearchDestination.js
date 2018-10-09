import React, {Component} from 'react';
//import {connect} from 'react-redux';
//import HomeScreen from "./HomeScreen.js";
//import * as actions from '../actions';
import { Link } from 'react-router-native'
import {  View } from 'react-native';
import { Container, Header, Title, Content, Footer,Item,Input,List,ListItem,Badge,Thumbnail, FooterTab, Button, Left, Right, Body, Icon, Text,Card, CardItem } from 'native-base';

export default class SearchDestination extends Component {
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
            <Title>Search Destination</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-more' />
            </Button>
          </Right>
       </Header>
        <Content>
          <Item style={{ marginLeft:15,marginRight:15,marginTop: 10}} rounded>
            <Input placeholder='Where do you want to go?' style={{ padding: 15}}/>
            <Icon style={{ margin: 15}} active name='search' />
          </Item>

          <Item style={{ justifyContent: 'center',borderBottomWidth: 0}}>
            <Text style={{fontSize: 10,color: 'grey'}}>Sugestions Nearby</Text>
          </Item>

         
            <List>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>North Country Mall</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>Sector 17 Chandigarh</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>Rock garden</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>Sukhna Lake</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
              </Body>
            </ListItem>
             <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>Pinjore Garden</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
              </Body>
            </ListItem>
             <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>Punjab University</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
              </Body>
            </ListItem>
             <ListItem avatar>
              <Left>
                <Thumbnail style={{borderRadius: 0}} source={{ uri: 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/48/Maps-icon.png' }} />

              </Left>
              <Body>
                <Text>Gedi Route</Text>
                <Text note>This is a very big mall. Now called as VR Punjab.The mall has good brand outlets</Text>
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
              <Link to="/myTrips"> 
              <Icon active name="md-paper-plane" />  
              </Link>
              <Link to="/myTrips">            
              <Text>Trips</Text>
              </Link>
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



//export default connect(null, actions)(Home);