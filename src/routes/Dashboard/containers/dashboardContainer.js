import React, { Component } from 'react'
import { connect } from 'react-redux'
import { visitsIncrement, dashboardAddItem, dashboardEditItem, dashboardChangeItemsOrder } from '../modules/dashboardReducer'
import { loginAsync } from '../../../modules/session'
import Dashboard from '../../../components/Dashboard/dashboard'

class DashboardContainer extends Component {
  constructor(props) {
    super(props)

    this.onChangeText = this.onChangeText.bind(this)
    this.submitAction = this.submitAction.bind(this)
    this.itemOnEdit = this.itemOnEdit.bind(this)

    this.state = {
      inputValue: '',
      editedItemKey: null
    }
  }

  componentDidMount() {
    const visitsIncrement = this.props;
    visitsIncrement();
  }

  onChangeText(newText) {
    this.setState({ inputValue: newText })
  }

  submitAction() {
    const { dashboardAddItem, dashboardEditItem } = this.props;
    const { inputValue, editedItemKey } = this.state;

    if (editedItemKey === null) {
      dashboardAddItem(inputValue);
    } else {
      dashboardEditItem(inputValue, editedItemKey);
    }

    this.setState({
      inputValue: '',
      editedItemKey: null
    })
  }

  itemOnEdit(index) {
    const { list } = this.props;
    const item = list[index];
    this.setState({
      inputValue: item.label,
      editedItemIndex: index
    });
  }

  render() {
    const { inputValue, editedItemKey } = this.state;
    const buttonText = { editedItemKey === null } ? 'Add item' : 'Edit item';

    return(
      <Dashboard 
        {...this.props}
        onChangeText={this.onChangeText}
        submitAction={this.submitAction}
        itemOnEdit={this.itemOnEdit}
        textInput={inputValue}
        buttonText={buttonText} />
    )
  }
}

const mapActionCreators = {
  visitsIncrement,
  dashboardAddItem,
  dashboardEditItem,
  loginAsync,
}

const mapStateToProps = (state) => ({
  value: state.dashboard.visitsCount,
  list: state.dashboard.list,
  isLoggedIn: state.session.isLoggedIn,
  loginToken: state.session.loginToken,
})

export default connect(mapStateToProps, mapActionCreators)(DashboardContainer)
