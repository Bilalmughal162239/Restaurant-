import { Col, Form, Input, Row, Typography, Button } from 'antd'
import React, { useState } from 'react'
import { auth } from '../../../Config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'


const { Title } = Typography
const initialState = { email: "", password: "" }
const Login = () => {

    const [state, setSate] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)
    const handleChange = e => setSate(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleSubmit = e => {
        e.preventDefault()
        let { email, password } = state
        setIsProcessing(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user', user)
            })
            .catch((error) => {
                window.notify("Some thing went wrong while login  a user", "error")
                console.error(error)
            })
            .finally(() => {
                setIsProcessing(false)
            });
    }
    return (
        <main className='auth p-3 p-lg-5'>
            <section>
                <div className="card p-3 p-lg-4">
                    <Title level={1} className='text-primary text-center'>Login</Title>
                    <Form layout='vertical'>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label='Email' required>
                                    <Input size='medium' type='email' placeholder='Enter Your Email ' name='email' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24} className='mb-0'>
                                <Form.Item label='Password' required>
                                    <Input.Password placeholder='Enter Your Password ' name='password' onChange={handleChange} />
                                    <Link to='/auth/forgetPassword'>Forget Password</Link>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <div id='LinkButtons'>
                                    <Link to='/auth/register' id='Login_link' size='large'>Register</Link>
                                    <Button type='primary' size='large' htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Login</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>

        </main>
    )
}

export default Login