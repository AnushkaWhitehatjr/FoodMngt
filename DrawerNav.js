import React, {Component} from 'react';
import {createDrawerNavigator} from '@react0navigation/drawer';
import Logout from './Logout';

const Drawer = createDrawerNavigator();

export default class DrawerNav extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Drawer.Navigator
              drawerContentOptions={{
                  activeTintColor:"blue",
                  inactiveTintColor:"yellow",
                  itemStyle={marginVertical:5}
              }}>
             <Drawer.screen
                 name="logout"
                 component={Logout}
              />



              </Drawer.Navigator>
        )
    }
}
