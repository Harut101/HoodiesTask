import React, {useEffect, useState} from 'react';
import List from '../../Components/List/List';
import Portal from '../../Components/Portal/Portal';
import Modal from '../../Components/Modal/Modal';
import UserProfile from '../../Components/UserProfile/UserProfile';
import ActionButton from '../../Components/actionButton/actionButton';
import { customRequest } from '../../Helpers/customRequest';
import { userNameValidation } from '../../Helpers/Validation'
import { addUsersAction, deleteUsersAction, changedNameAction, addUserAction, logOutAction } from '../../Store/Actions/Profile'
import { connect } from 'react-redux';
import '../Profile/Profile.css'

function Profile(props) {
  let [modalState, setModalState] = useState(false);
  let [newUserName, setNewUserName] = useState('');
  let [validation, setValidation] = useState('');
  let { addUsersAction, deleteUsersAction, changedNameAction, addUserAction, logOutAction } = props;

  useEffect(() => {
      if(!props.isLogedIn) {
          props.history.push('/')
          
      } else {
          customRequest('https://reqres.in/api/users', 'get', {}).then((response) => {
            addUsersAction(response.data)
          })
      }
    
  }, [addUsersAction, props.isLogedIn])

  const closeModal = (e) => {
    
    if(e.target.className === 'close' || e.target.className === 'Modal-Layer'){
      setModalState(false)
    }
  }

  const openModal = () => {
    setModalState(true)
 }

  const deleteUser = (id) => {
    deleteUsersAction(id)
  }

  const onChange = (e) => {
    setNewUserName(e.target.value)
  }

  const changedName = (e) => {
    let name = e.target.innerText;
    changedNameAction(name)
  }

  const addUser = () => {
      if(userNameValidation('user',newUserName)){
        setValidation('')
        let fullName = newUserName.split(' ');
        addUserAction(fullName[0], fullName[1])
        setModalState(false)
      } else {
        setValidation('error')
      }
  }

  const logOut = () => {
    logOutAction()
  }


  return (
    <div className="Profile">
      <ActionButton classname='logOut' text='Logout' action={logOut}/>
      <UserProfile changedName={changedName} userName={props.ownerName}/>
      <List data={props.users} delete={deleteUser} openModal={openModal}/>
      <Portal>
        { modalState && 
          <Modal title='Add New Contact' 
            close={closeModal} 
            action={addUser} 
            onChange={onChange}
            value={newUserName}
            validation={validation}
          />
        }
      </Portal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users : state.profile.users,
    ownerName: state.profile.ownerName,
    isLogedIn: state.signIn.isLogedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUsersAction: (users) => dispatch(addUsersAction(users)),
    deleteUsersAction: (id) => dispatch(deleteUsersAction(id)),
    changedNameAction: (name) => dispatch(changedNameAction(name)),
    addUserAction: (first_name, last_name) => dispatch(addUserAction(first_name, last_name)),
    logOutAction: () => dispatch(logOutAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);