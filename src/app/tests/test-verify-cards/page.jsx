"use client";

import React, { useState } from 'react';

export default function VerifyCards() {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	async function runTests() {
		setError(null);
		setResults([]);
		setLoading(true);

		const testCases = [
			{
				name: 'Valid Names',
				input: ["Sol Ring", "Arcane Signet"],
				expectedStatus: 200,
			},
			{
				name: 'Invalid Names',
				input: ["Sol Ring", "Not Card", "Arcane Signet", "Fake Card"],
				expectedStatus: 422,
				expectedInvalidNames: ["Not Card", "Fake Card"],
			},
			{
				name: 'Empty Names',
				input: [],
				expectedStatus: 200,
			},
		];

		const results = [];

		for (const testCase of testCases) {
			try {
				const response = await fetch('/api/decks/verify-cards', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ names: testCase.input })
				});

				const responseText = await response.text();
				let data = {};
				if (responseText) {
					data = JSON.parse(responseText);
				} else {
					throw new Error('Empty response from the server.');
				}

				const result = {
					name: testCase.name,
					expectedStatus: testCase.expectedStatus,
					responseStatus: data.status,
					responseStatusText: data.statusText,
					invalidNames: data.invalidNames || [],
				};

				console.log('Test Result:', result);

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
			<h1>Verify MTG Cards</h1>
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
							<p>Expected Status: {result.expectedStatus}</p>
							<p>Response Status: {result.responseStatus}: {result.responseStatusText}</p>
							{result.invalidNames.length > 0 && (
								<p>Incorrect Names: {JSON.stringify(result.invalidNames, null, 2)}</p>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
