import { Col, Form, Input, Row, Typography, Button } from 'antd'
import React, { useState } from 'react'
import { auth, firestore } from '../../../Config/firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const { Title } = Typography
const initialState = { firstName: "", lastName: "", email: "", password: "" }
const Register = () => {

    const [state, setSate] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)
    const handleChange = e => setSate(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleSubmit = e => {
        e.preventDefault()
        let { firstName, email, password, conformPassword } = state
        firstName = firstName.trim()
        if (firstName.length < 3) { return window.notify("Please Enter Your Name Correctly ", "error") }
        if (password.length < 6) { return window.notify("Please Enter Your Password Atlest 6 Charaters ", "error") }
        if (conformPassword !== password) { return window.notify("Password Does not matact ", "error") }
        // const userData = { firstName, lastName, email, password, conformPassword, uid: window.getRandomId }
        setIsProcessing(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user', user)
                createDocument(user)
            })
            .catch((error) => {
                window.notify("Some thing went wrong while Create a user", "error")
                console.log('error', error)
                setIsProcessing(false)
            });
        const createDocument = async (userData) => {
            console.log('userData', userData)
            let { email, uid, displayName } = userData;

            let user = {
                firstName: state.firstName || displayName,
                lastName: state.lastName || displayName,
                email,
                uid,
                dateCreated: serverTimestamp(),
                status: 'active',
                role: ['user']
            }

            console.log('user', user)

            try {
                // const docRef = await addDoc(collection(firestore, "users"), userData);
                await setDoc(doc(firestore, "users", user.uid), user);
                window.notify("Create User Profile successfully", "success")
                setIsProcessing(false)
                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                window.notify("Error Created by Created User Profile", "error")
                console.error("Error adding document: ", e);
                setIsProcessing(false)
            }
        }
    }
    return (
        <main className='auth p-3 p-lg-5'>
            <section>
                <div className="card p-3 p-lg-4">
                    <Title level={1} className='text-primary text-center'>Register</Title>
                    <Form layout='vertical'>
                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Form.Item label="First Name" required>
                                    <Input size='large' type='first name' placeholder='Enter Your First Name' name='firstName' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Last Name">
                                    <Input size='large' type='last name' placeholder='Enter Your Last Name' name='lastName' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Email' required>
                                    <Input size='medium' type='email' placeholder='Enter Your Email ' name='email' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Password' required>
                                    <Input.Password placeholder='Enter Your Password ' name='password' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Conform Password' required>
                                    <Input.Password placeholder='Enter Your Password Again ' name='conformPassword' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Register</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>

        </main>
    )
}

export default Register