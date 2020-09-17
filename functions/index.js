const functions = require('firebase-functions');
const fs = require('fs');

var Airtable = require('airtable');
Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	apiKey: 'keykwhQIfYJ0rxjnj'
});
var base = Airtable.base('appijFDoXEaa1S4tF');

console.log('Kobling til Airtable: ', base);

var adhkar = [];
var dhikr;
base('data')
	.select({
		fields: [ 'key_id', 'dhikr_id', 'arabic_text' ],
		sort: [ { field: 'key_id', direction: 'asc' } ],
		maxRecords: 3
	})
	.firstPage(function(err, records) {
		if (err) {
			console.error(err);
			return;
		} else {
			// console.log('Adhkar', records);
		}
		records.forEach(function(record) {
			var key_id = record.get('key_id');
			var dhikr_id = record.get('dhikr_id');
			var arabic_text = record.get('arabic_text');

			dhikr = {
				key_id: key_id,
				dhikr_id: dhikr_id,
				arabic_text: arabic_text
			};

			// var stringed = JSON.stringify(dhikr);
			adhkar.push(JSON.stringify(dhikr));
		});
		// console.log(adhkar);
		fs.writeFileSync('adhkar.json', adhkar);
		// if (adhkar.length < 1 || adhkar == undefined) {
		// 	console.log('Array is empty');
		// } else {
		// 	console.log('Array is OK!');
		// 	fs.writeFileSync('adhkar.json', adhkar);
		// }
	});
