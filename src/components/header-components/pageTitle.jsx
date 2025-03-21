'use client';
import { usePageTitleContext } from '../context-providers/pageTitleContextProvider';
import { Skeleton } from '@heroui/react';

export default function PageTitle() {
	/**
	 * PageTitle() returns a <p> component with the page's title text.
	 */
	const {pageTitle, setPageTitle} = usePageTitleContext();
	
	return (
		<Skeleton isLoaded={pageTitle}>
			<p className="m-2 min-w-full justify-center text-wrap lg:text-nowrap text-center font-body text-4xl md:mx-8 md:text-5xl lg:min-w-fit lg:text-6xl">
				{pageTitle}
			</p>
		</Skeleton>
	);
}
