'use client';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageTitle() {
	/**
	 * PageTitle() returns a <p> component with the page's title text.
	 */
	const searchParams = useSearchParams();
	const pathName = usePathname();
	//Collections of paths and Titles
	const titles = {
		'/': 'Deck Tuning Assistant',
		'/rate-limited': 'The Mystics are Mysticising',
	};
	//If the pageTitle is not in our pre-defined list, use the search parameter
	const pageTitle = titles[pathName]
		? titles[pathName]
		: searchParams.get('title');

	return (
		<p className="m-2 min-w-full justify-center text-wrap text-center font-body text-4xl md:mx-8 md:text-5xl lg:min-w-fit lg:text-6xl">
			{pageTitle}
		</p>
	);
}
