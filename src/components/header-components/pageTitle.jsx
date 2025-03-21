'use client';
import { usePageTitleContext } from '../context-providers/pageTitleContextProvider';

export default function PageTitle() {
	/**
	 * PageTitle() returns a <p> component with the page's title text.
	 */
	const {pageTitle, setPageTitle} = usePageTitleContext();
	
	return (
		<p className="m-2 min-w-full justify-center text-wrap text-center font-body text-4xl md:mx-8 md:text-5xl lg:min-w-fit lg:text-6xl">
			{pageTitle}
		</p>
	);
}
