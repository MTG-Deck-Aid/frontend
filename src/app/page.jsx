import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/button';
import './globals.css';
import UserDecks from '@/components/userDecks';
import pageLogo from '/public/logo-dark.png';

export default async function Home() {
	const logoWidth = 350;
	const logoHeight = logoWidth;

	return (
		<main className="m-2 mb-10 p-2 sm:m-8 sm:mb-20 sm:p-8">
			<div className="flex basis-full flex-col gap-4">
				<div className="flex justify-center">
					<Image
						src={pageLogo}
						width={logoWidth}
						height={logoHeight}
						alt="Mystic Tuner logo"
						className="self-center w-full max-w-[350px] h-full max-h-[350px]"
					/>
				</div>
				<div className="flex justify-center">
					<Button
						size="lg"
						variant="shadow"
						color="primary"
						as={Link}
						href={{
							pathname: '/view-import-deck/new-deck',
							query: { title: 'New Deck' },
						}}
						className="no-underline"
					>
						Make a Deck!
					</Button>
				</div>
				<div className="mt-10 w-full">
					<UserDecks />
				</div>
			</div>
		</main>
	);
}
