import React from 'react';
import "./PasswordButton.scss"
import {Popover,Classes} from '@blueprintjs/core'
import Button from './../Button/Button'
import {getUser } from '../../redux/user/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNewPassword, changePassword } from '../../redux/user/actions';
import { login, setPassword ,changeOldPassword} from '../../redux/user/fetch';
import { loadListNoteFetch } from '../../redux/note/fetch';
class PasswordButton extends React.Component{

    handlerEditPassword(evt){
        this.props.changePassword(evt.target.value)
    }

    handlerEditNewPassword(evt){
        this.props.changeNewPassword(evt.target.value)
    }

    handlerSetPassword(){
        this.props.setPassword(this.props.user.password)
    }

    async handlerLoginUser(){
        await this.props.login(this.props.user.password)
        this.props.loadListNote()
    }

    handlerChangePassword(){
        this.props.changeOldPassword(this.props.user.password,this.props.user.newPassword)
    }

    render(){
        let passwordText,confirmButton,field,action,passwordError=null;

        if (this.props.user.passwordError !== ""){
            passwordError=(
                <p className="error-password">{this.props.user.passwordError}</p>
            )
        }

        if (this.props.user.hasPassword){
            if(this.props.user.loggedin){
                field = (
                    <label className={Classes.LABEL}>
                        Old Password:
                        <input type="password" value={this.props.user.password} onChange={this.handlerEditPassword.bind(this)} autoFocus={true} className={Classes.INPUT}/>
                        New Password:
                        <input type="password" value={this.props.user.newPassword} onChange={this.handlerEditNewPassword.bind(this)} className={Classes.INPUT}/>
                    </label>
                )
                passwordText = "Change Password"
                confirmButton = "Change"
                action = this.handlerChangePassword
            }else{
                field = (
                    <label className={Classes.LABEL}>
                        Password:
                        <input value={this.props.user.password} onChange={this.handlerEditPassword.bind(this)} autoFocus={true} className={Classes.INPUT} type="password" />
                    </label>
                )
                passwordText = "Unlock"
                confirmButton = "Unlock"
                action = this.handlerLoginUser
            }
        }else{
            field = (
                <label className={Classes.LABEL}>
                    Password:
                    <input value={this.props.user.password} onChange={this.handlerEditPassword.bind(this)} autoFocus={true} className={Classes.INPUT} type="password" />
                </label>
            )
            passwordText = "Set Password"
            confirmButton = "Set"
            action = this.handlerSetPassword
        }


        return(
            <Popover
                    popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                    position="auto"
            >
                <Button icon="lock" className="white-font purple-pastel-hoverable">{passwordText}</Button>
                <div key="input">
                    {field}
                    {passwordError}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                        <Button className={"grey-pastel-hoverable cancel-set "+Classes.POPOVER_DISMISS} style={{ marginRight: 10 }}>
                            Cancel
                        </Button>
                        <Button className="red-pastel-hoverable white-font" onClick={action.bind(this)}>
                            {confirmButton}
                        </Button>
                    </div>
                </div>    
            </Popover>
        )
    }
}

const mapStateToProps  = state =>{
    const user = getUser(state)
    return {user}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
    changePassword: changePassword,
    changeNewPassword: changeNewPassword,
    login: login,
    loadListNote: loadListNoteFetch,
    setPassword : setPassword,
    changeOldPassword: changeOldPassword
},dispatch)



export default connect(mapStateToProps,mapDispatchToProps)(PasswordButton)