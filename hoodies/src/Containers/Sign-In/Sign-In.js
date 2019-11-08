import React, { useState, useEffect } from 'react';
import Input from '../../Components/Input/Input';
import DropDown from '../../Components/DropDown/DropDown';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Button from '../../Components/Button/Button';
import Loader from '../../Components/LoadingSpiner/Loader';
import RenewButton from '../../Components/renewButton/renewButton';
import EditBlock from '../../Components/EditBlock/editBlock';
import { phoneValidation, codeValidation } from '../../Helpers/Validation';
import { getCountryCode } from '../../Helpers/getCountryCode';
import { formParams } from '../../Utils/formParams';
import { connect } from 'react-redux';
import { signInActions, editPhone, addCode } from '../../Store/Actions/Sign-In'
import '../Sign-In/Sign-In.css';

function SignIn(props) {
  const [inputState, setInputState] = useState(formParams( ))
  const [validInput, setInputValidation] = useState(false)
  const [validCode, setCodeValidation] = useState(true)
  const [country, setCountry] = useState(null)
  const [animateState, toggle] = useState(false)
  const [checkCodeState, setCheckCodeState] = useState(false)
  const { signInActions, editPhone, addCode } = props;

  useEffect(() => {
    getCountryCode().then( response => {
      setCountry(response);
    });
  
   
  }, []);

  const sendData = (type, valid, stateKey, next, e) => {
        if(((e.type === 'keyup' && e.keyCode === 13) || e.type === 'click') && valid){
              let phone = inputState[stateKey].value;
              signInActions(type, stateKey, next, phone, country)

      } else {

        if(e.target.value === '' && e.keyCode === 13){
              toggle(!animateState);
        }

          return;
      }
  }

  const sendPhone = (e) => {
      e.preventDefault();
      sendData('ADDPHONE', validInput, 'phone', true, e)
  }

  const sendCode = (e) => {
      e.preventDefault();
      sendData('ADDCODE', validCode, 'code', true, e)
  }

  const checkCode = () => {
    setCheckCodeState(true);

   let timer = setTimeout(() => {
      inputState['code'].touched = true;
      let valid = codeValidation('code', inputState['code'].value);
      let code =  inputState['code'].value
      setCodeValidation(valid);
      setCheckCodeState(false);

      if(valid){
          addCode(code)
          props.history.push('/profile')

      } else {
          toggle(!animateState);
      }

      clearTimeout(timer)
    }, 1000)
  }

  const changePhone = () => {
        editPhone()
  }

  const onChange = (e) => {
        e.persist();

         let valid;
         let field = inputState[e.target.name];
         field.value = e.target.value;
         field.touched = true;
         inputState[field] = field;
         
        if(e.target.name === 'phone'){
          valid = phoneValidation(e.target.name, e.target.value);
          setInputValidation(valid);
        }
    
        setInputState({...inputState});
    
  }
  

  return (
    <div className="SignIn">
      <h1 className='title'>Sign In/Register</h1>
      {!props.next ? 
          <Wrapper state={validInput} animateState={animateState} toggle={props.next}  touched={inputState['phone'].touched}>
              <DropDown country={country}/>
              <Input 
                  value={inputState['phone'].value} 
                  touched={inputState['phone'].touched} 
                  onChange={onChange} 
                  name={inputState['phone'].name}
                  state={validInput}
                  send={sendPhone}
                  placeholder='000-00-00'
                  class=''
                />
              <Button disabled={validInput} sendCode={sendPhone} icon='Vector2.svg'/>
          </Wrapper> 
        :
        <Wrapper state={validCode} animateState={animateState} toggle={props.next}  touched={inputState['code'].touched}>
          {checkCodeState ? 
                <Loader/> 
              :   
              <> 
                <EditBlock text={props.phone} changePhone={changePhone} info='Edit Number'/>
                <Input 
                    value={inputState['code'].value} 
                    touched={inputState['code'].touched} 
                    onChange={onChange} 
                    name={inputState['code'].name}
                    state={validCode}
                    send={sendCode}
                    class='code'
                  />
                <RenewButton disabled={validInput} checkCode={checkCode}/>
              </>
          }
      </Wrapper>
      }
      
      <p className="helpText">
        {!props.next ? 
          'Enter phone number to sign in or register' 
          : 
          `Enter the verification code that we sent to ${props.phone}`}
      </p>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    phone : state.signIn.phone,
    code: state.signIn.code,
    next: state.signIn.next,
    isLogedIn: state.signIn.isLogedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInActions: (type, stateKey, next, phone, country) => dispatch(signInActions(type, stateKey, next, phone, country)),
    editPhone: () => dispatch(editPhone()),
    addCode: () => dispatch(addCode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
