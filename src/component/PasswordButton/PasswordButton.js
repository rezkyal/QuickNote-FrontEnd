import React from 'react';
import "./PasswordButton.scss"
import {Popover,Classes} from '@blueprintjs/core'
import Button from './../Button/Button'
import {getUser } from '../../redux/user/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNewPassword, changePassword, changeConfirmPassword, changePopoverPassword } from '../../redux/user/actions';
import { login, setPassword ,changeOldPassword} from '../../redux/user/fetch';
import { loadListNoteFetch } from '../../redux/note/fetch';
class PasswordButton extends React.Component{

    handlerEditPassword(evt){
        this.props.changePassword(evt.target.value)
    }

    handlerEditNewPassword(evt){
        this.props.changeNewPassword(evt.target.value)
    }

    handlerEditConfirmPassword(evt){
        this.props.changeConfirmPassword(evt.target.value)
    }

    handlerSetPassword(){
        this.props.setPassword(this.props.user.password,this.props.user.confirmPassword)
    }

    async handlerLoginUser(){
        await this.props.login(this.props.user.password)
        this.props.loadListNote()
    }

    handlerChangePassword(){
        this.props.changeOldPassword(this.props.user.password,this.props.user.confirmPassword,this.props.user.newPassword)
    }

    handlerPopoverPassword(state){
        this.props.changePopoverPassword(state)
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
                        Confirm Old Password:
                        <input type="password" value={this.props.user.confirmPassword} onChange={this.handlerEditConfirmPassword.bind(this)} autoFocus={true} className={Classes.INPUT}/>
                        New Password:
                        <input type="password" value={this.props.user.newPassword} onChange={this.handlerEditNewPassword.bind(this)} className={Classes.INPUT}/>
                    </label>
                )
                passwordText = "Change"
                confirmButton = "Change Password"
                action = this.handlerChangePassword
            }else{
                field = (
                    <label className={Classes.LABEL}>
                        Password:
                        <input type="password" value={this.props.user.password} onChange={this.handlerEditPassword.bind(this)} autoFocus={true} className={Classes.INPUT} />
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
                    <input type="password" value={this.props.user.password} onChange={this.handlerEditPassword.bind(this)} autoFocus={true} className={Classes.INPUT} />
                    Confirm Password:
                    <input type="password" value={this.props.user.confirmPassword} onChange={this.handlerEditConfirmPassword.bind(this)} autoFocus={true} className={Classes.INPUT}/>
                </label>
            )
            passwordText = "Set"
            confirmButton = "Set Password"
            action = this.handlerSetPassword
        }

        if (window.innerWidth <= 1224){
            passwordText=""
        }

        return(
            <Popover
                    popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                    position="auto"
                    isOpen={this.props.user.passwordPopover}
                    onInteraction={(state) => this.handlerPopoverPassword(state)}
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
    changeConfirmPassword: changeConfirmPassword,
    changeNewPassword: changeNewPassword,
    login: login,
    loadListNote: loadListNoteFetch,
    setPassword : setPassword,
    changeOldPassword: changeOldPassword,
    changePopoverPassword: changePopoverPassword
},dispatch)



export default connect(mapStateToProps,mapDispatchToProps)(PasswordButton)