import React from 'react'
import { SearchBar } from 'react-native-elements';
import {Dimensions} from 'react-native'
let {height, width} = Dimensions.get("window")

export default class SearchBars extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{backgroundColor:'#fff', borderWidth:0, width:width/1.2 }}
        inputContainerStyle={{backgroundColor:'#fff'}}
        lightTheme={true}
        round={true}
        searchIcon={false}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}