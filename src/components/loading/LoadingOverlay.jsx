"use client";
import React from 'react';
import { ViewDeckContextProvider, useViewDeckContext } from "@/components/viewDeckContextProvider";
import { CommanderImage, DeckInput, DeckNameInput, ViewButtonGroup } from "@/components/view-edit-deck";
import { Divider } from "@heroui/react";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function ViewImportDeck({ params }) {
	// If you need to use params, you can extract them here.
	// This page is now fully client-side.
	return (
		<ViewDeckContextProvider>
			<PageContent />
		</ViewDeckContextProvider>
	);
}

function PageContent() {
	const { loading } = useViewDeckContext();

	return (
		<div className="relative flex flex-col items-center justify-center max-w-screen min-h-screen gap-8 p-4">
			{/* First row: Deck Name and Button Group */}
			<div className="flex w-full justify-between items-center">
				<div className="flex">
					<DeckNameInput />
				</div>
				<div className="flex">
					<ViewButtonGroup />
				</div>
			</div>
			<Divider />
			{/* Second Row: Commander Selection */}
			<div>
				<CommanderImage />
			</div>
			<Divider />
			{/* Third Row: Deck Input */}
			<div className="w-full">
				<DeckInput />
			</div>
			{/* Conditionally render the LoadingOverlay */}
			{loading && <LoadingOverlay />}
		</div>
	);
}
