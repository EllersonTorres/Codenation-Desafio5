import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts'
import Loading from './components/Loading'

const url = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactsList: null,
      orderBy: '',
      filterByContact: null,
      loading: true
    }

  }

  componentDidMount() {

    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          contactsList: resp,
          loading: false
        })
      })
  }

  handleOrder = (order) => {
    this.setState({ orderBy: order })
  }

  handleFilter = (filter) => {
    this.setState({ filterByContact: filter })
  }


  render() {
    if (this.state.loading){
      return <Loading />
    }
    return (
      <div data-testid="app" className="app">
        <Topbar />

        <Filters orderSelected={this.handleOrder} filterName={this.handleFilter} />

        <Contacts contacts={this.state.contactsList} order={this.state.orderBy} filter={this.state.filterByContact} />
      </div>
    )
  }
}

export default App;
