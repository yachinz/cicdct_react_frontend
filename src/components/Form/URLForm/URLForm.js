import React, { useState } from 'react';
import { Form, InputGroup, Col } from 'react-bootstrap';
import Button from '../../Button/Button';

import styles from './URLForm.module.css';

const URLForm = (props) => {
	const [ validated, setValidated ] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();
		}
		const longURL = event.target.elements.cloud_url_input.value;
		// console.log('Long URL: ', longURL);
		setValidated(true);
		if (form.checkValidity() === true) {
			props.getShortURLHandler(longURL);
			setValidated(false);
		}
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Row className={styles.URLForm}>
				<Form.Group as={Col} md="6" className={styles.Form}>
					<Form.Label className={styles.InputLabel}>Enter URL</Form.Label>
					<InputGroup className={styles.InputField}>
						<Form.Control
							type="text"
							placeholder="Paste URL here..."
							aria-describedby="Long URL"
							required
							id="cloud_url_input"
						/>
						<Form.Control.Feedback type="invalid">Please enter a valid URL.</Form.Control.Feedback>
						{/* <Form.Control.Feedback type="valid">Generating short URL...</Form.Control.Feedback> */}
					</InputGroup>
					<div className={styles.GetButton}>
						<Button type="submit" color="#2789f2">
							Get Shortened URL
						</Button>
					</div>
				</Form.Group>
			</Form.Row>
		</Form>
	);
};

export default URLForm;
