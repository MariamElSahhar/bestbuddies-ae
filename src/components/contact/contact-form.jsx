import { React } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

import "react-phone-number-input/style.css";

const ContactForm = ({ updateSubmission }) => {
	return (
		<Form
			id="contact-form"
			layout="vertical"
			name="contact"
			labelCol={{
				span: 100,
				width: "100%",
			}}
			wrapperCol={{
				span: 1000,
				width: "100%",
			}}
			style={{
				marginTop: "30px",
				width: "40%",
				maxWidth: "80%",
			}}
			initialValues={{
				remember: true,
			}}
			autoComplete="off"
			onFinish={() => updateSubmission(true)}
			onFinishFailed={() => updateSubmission(true)}
		>
			<Form.Item
				label="Full Name"
				name="fullname"
				rules={[
					{
						required: true,
						message: "Please input your name!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						type: "email",
						message: "Please input a valid email address",
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Message"
				name="message"
				rules={[
					{
						required: true,
						message: "Please input your message!",
					},
				]}
			>
				<Input.TextArea />
			</Form.Item>

			<Form.Item
				style={{
					width: "100%",
				}}
			>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ContactForm;
