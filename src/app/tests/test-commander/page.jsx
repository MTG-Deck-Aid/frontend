"use client";

import React, { useState } from 'react';

export default function VerifyCommander() {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	async function runTests() {
		setError(null);
		setResults([]);
		setLoading(true);

		const testCases = [
			{
				name: 'Valid Commander',
				input: { commander: "Yarok, the Desecrated" },
				expectedStatus: 200,
			},
			{
				name: 'Fuzzy Search Commander',
				input: { commander: "Yaro, the Des" },
				expectedStatus: 200,
			},
			{
				name: 'Another Valid Commander',
				input: { commander: "Minsc & Boo, Timeless Heroes" },
				expectedStatus: 200,
			},
			{
				name: 'Invalid Commander',
				input: { commander: "Lightning Bolt" },
				expectedStatus: 422,
			},
		];

		const results = [];

		for (const testCase of testCases) {
			try {
				const response = await fetch('/api/decks/commander', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(testCase.input)
				});

				const data = await response.json();

				const result = {
					name: testCase.name,
					testInput: testCase.input.commander,
					expectedStatus: testCase.expectedStatus,
					responseStatus: data.status,
					responseData: data,
				};

				if (result.responseStatus === 200) {
					// For some reason this log statement allows for the result above to keep the images in scope cause otherwise it doesnt save them
					console.log('Response Data:', result.responseData.images.art_crop);
				}

				results.push(result);
			} catch (err) {
				setError(err.message);
			}
		}

		setResults(results);
		setLoading(false);
	}

	return (
		<div>
			<h1>Verify Commander Card</h1>
			<button onClick={runTests} disabled={loading}>
				{loading ? 'Running Tests...' : 'Run Tests'}
			</button>
			{error && <div>Error: {error}</div>}
			{results.length > 0 && (
				<div>
					<h2>Test Results:</h2>
					{results.map((result, index) => (
						<div key={index}>
							<h3>Testing {index}: {result.name}</h3>
							<p>Input: {result.testInput}</p>
							<p>Expected Status: {result.expectedStatus}</p>
							<p>Response Status: {result.responseStatus}</p>
							{result.responseStatus === 200 && (
								<div>
									<p>Commander: {result.responseData.commander}</p>
									<img src={result.responseData.images.small} alt={result.responseData.commander} />
									<img src={result.responseData.images.art_crop} alt={result.responseData.commander} height="200px" />
								</div>
							)}
							{result.responseStatus === 422 && (
								<p>Error: {result.responseData.statusText}</p>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
