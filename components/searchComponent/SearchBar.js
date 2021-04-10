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
        containerStyle={{backgroundColor:'#fff', width:width/1.2 }}
        inputContainerStyle={{backgroundColor:'#fff',borderWidth:1}}
        lightTheme={true}
        round={true}
        searchIcon={false}
      />
    );
  }
}