import Nav from '../components/nav';
import Airtable from 'airtable';
// import firebase from '../firebase';
import { useState, useEffect } from 'react';
// import GetMorning from '../components/GetMorning';

function IndexPage({ adhkar }) {
	return (
		<div>
			<div className="py-20">
				<h1 className="text-5xl text-center text-accent-1">Dhikr.life</h1>
			</div>
			<div>
				<ul>{adhkar.map((dhikr) => <li key={dhikr.key_id}>{dhikr.arabic_text}</li>)}</ul>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const airtable = new Airtable({
		apiKey: process.env.AIRTABLE_KEY
	});

	const records = await airtable.base('appijFDoXEaa1S4tF')('Data')
		.select({
			fields: [
				'key_id',
				'dhikr_id',
				'arabic_text',
				'read_amount_int',
				'time_of_day',
				'source',
				'translation_eng'
			],
			sort: [ { field: 'key_id', direction: 'asc' } ],
			maxRecords: 3
		})
		.all();

	const adhkar = records.map((product) => {
		return {
			key_id: product.get('key_id'),
			dhikr_id: product.get('dhikr_id'),
			time_of_day: product.get('time_of_day'),
			arabic_text: product.get('arabic_text'),
			read_amount_int: product.get('read_amount_int')
		};
	});

	return {
		props: {
			adhkar
		}
	};
}

export default IndexPage;
