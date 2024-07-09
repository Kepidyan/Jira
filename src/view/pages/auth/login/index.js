import React from "react";
import { Input, Button, Divider,Form, notification, Typography } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import{ auth } from '../../../../services/firebase/firebase'
import Title from "antd/es/typography/Title";
import './index.css';


class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            loading : false,
            email : '',
            password: '',
            status: ''
        }
        this.doSignInWithEmailAndPassword =this.doSignInWithEmailAndPassword.bind(this)
    }
    handleChangeInput = value => {
        this.setState(value)  
    }

    async doSignInWithEmailAndPassword(e){
        const { email, password } = this.state;
        this.setState({
            loading: true
        });
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            notification.success({
                message:'You Sing In',
                description:`Welcome dear`
            })
            this.setState({
                status:''
            })
        }catch(error){
            notification.error({
                message: 'Wrong Login',
                description: 'Invalid Login Credentials'
            })
            this.setState({
                status:'error'
            })
        }finally{
            this.setState({
                loading: false
            });
        }
    }

      render(){
        return(
            <div className="auth_login_container">
                <Title level={2}>
                    Sing In
                </Title>
            <Form layout="vertical" onValuesChange={this.handleChangeInput}>
                <Form.Item label="Email" name="email"> 
                    <Input
                        type="email"
                        placeholder="Email"
                        status={this.state.status}
                    />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input
                        type="password"
                        placeholder="Password"
                        status={this.state.status}
                    />
                </Form.Item>
                <Divider />
                <Button 
                    loading={this.state.loading} 
                    type= "primary" 
                    onClick={this.doSignInWithEmailAndPassword}
                >

                    Sing In
                </Button>
            </Form>
            </div>
        )
      }
}

export default Login