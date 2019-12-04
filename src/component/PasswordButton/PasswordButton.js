import React from 'react';
import "./PasswordButton.scss"
import {Popover,Classes} from '@blueprintjs/core'
import Button from './../Button/Button'
import {getUser } from '../../redux/user/selectors';
import { connect } from 'react-redux';

class PasswordButton extends React.Component{
    render(){
        let passwordText;

        if (this.props.user.hasPassword){
            if(this.props.user.loggedin){
                passwordText = "Change Password"
            }else{
                passwordText = "Unlock"
            }
        }else{
            passwordText = "Set Password"
        }


        return(
            <Popover
                    popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                    position="auto"
            >
                <Button icon="lock" className="white-font purple-pastel-hoverable">{passwordText}</Button>
                <div key="input">
                    <label className={Classes.LABEL}>
                        Password:
                        <input autoFocus={true} className={Classes.INPUT} type="text" />
                    </label>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                        <Button className={"grey-pastel-hoverable cancel-set "+Classes.POPOVER_DISMISS} style={{ marginRight: 10 }}>
                            Cancel
                        </Button>
                        <Button className="red-pastel-hoverable white-font">
                            Set
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

// const mapDispatchToProps = dispatch=> bindActionCreators({
//     editNote: get,
//     deleteNote: deleteNoteFetch
// },dispatch)

export default connect(mapStateToProps,null)(PasswordButton)