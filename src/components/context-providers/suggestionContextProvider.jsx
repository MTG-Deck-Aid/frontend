'use client';
import { useContext, useState, createContext } from 'react';

const SuggestionContext = createContext();
export default function SuggestionContextProvider({ children }) {
	const [suggestions, setSuggestions] = useState({
		cardsToAdd: '',
		cardsToRemove: '',
		issues: [''],
	});

	return (
		<SuggestionContext.Provider value={{ suggestions, setSuggestions }}>
			{children}
		</SuggestionContext.Provider>
	);
}
export function useSuggestionContext() {
	const context = useContext(SuggestionContext);
	if (!context) {
		throw new Error(
			'useSuggestionContext must be used within a UseSuggestionContextProvider',
		);
	}
	return context;
}
