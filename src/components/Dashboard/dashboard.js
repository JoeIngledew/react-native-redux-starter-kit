import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import LoginDashboard from './loginDashboard'

const Dashboard = (props) => {
  const { value, list, onChangeText, submitAction, itemOnEdit, textInput, buttonText, loginAsync, isLoggedIn, loginToken } = props;

  const inputSubmitAction = () => {
    submitAction();
  }

  const editLabelAction = (index) => {
    itemOnEdit(index);
  }

  const listJSX = list.map((item, i) => {
    return <TouchableOpacity key={i} onPress={() => editLabelAction(i)}>
             <Text style={styles.buttonText}>{item.label}</Text>
           </TouchableOpacity>
  })

  return (
    <View style={styles.container}>
      {
        {isLoggedIn} ? null : <LoginDashboard submitAction={loginAsync} isError={loginToken === 'invalid'} />
      }
      {
        {isLoggedIn} ?
          <Text style={styles.text}>
            Dashboard visits: <Text style={styles.value}>{value}</Text>
          </Text>
          <TextInput
            style={styles.inputText}
            onChange={(text) => onChangeText(text)}
            value={textInput}
            placeholder='Input new label here' />
          <TouchableOpacity onPress={inputSubmitAction} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
          {listJSX}
          :
          <Text style={styles.text}>
            Please log in
          </Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  value: {
    width: 40,
    fontWeight: 'bold',
    color: 'limegreen',
    textAlign: 'center',
  },
  inputText: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgb(233, 233, 233)',
    borderWidth: 1,
    borderColor: 'rgb(213, 213, 213)',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    fontSize: 20,
    textAlign: 'center',
  },
})

export default Dashboard
