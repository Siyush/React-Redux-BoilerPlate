import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions';

class Items extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const items = this.props.items.map(item => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <h4>Email: {item.email}</h4>
        <p>{item.body}</p>
        <hr />
      </div>
    ));
    return (
      <div>
        <h1>Tasks</h1>
        <hr />
        {items}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(
  mapStateToProps,
  { fetchItems }
)(Items);
