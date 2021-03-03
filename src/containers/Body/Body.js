import React, { useState } from 'react';

import styles from './Body.module.css';

import { Container } from 'react-bootstrap';
import URLForm from '../../components/Form/URLForm/URLForm';
import ShortURLForm from '../../components/Form/ShortURLForm/ShortURLForm';

import axios from 'axios';

const LandingPage = () => {
	const [ shortURL, setShortURL ] = useState('');
	// const [ isLoading, setIsLoading ] = useState(false);

	const getShortURLHandler = (url) => {
		console.log("pass");
		const urlObj = {
			original_link: url
		};
		// const API = `http://shorturl3-ece-528-building-ci-cd-for-api.k-apps.osh.massopen.cloud/`;
		const API = `http://localhost:5000/api/`;
		// setIsLoading(true);
		axios
			.post(API, urlObj, {
				crossDomain: true,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				}
			})
			.then((result) => {
				setShortURL(result.data.short_link);
			})
			.catch((err) => {
				// setIsLoading(false);
				console.log(err);
			});
		// setIsLoading(false);
	};

	return (
		<Container className={styles.Body}>
			<URLForm getShortURLHandler={getShortURLHandler} />
			<ShortURLForm shortURL={shortURL} />
		</Container>
	);
};

export default LandingPage;
