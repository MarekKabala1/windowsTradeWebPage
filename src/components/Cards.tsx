type CardItems = {
	header: string;
	content: string;
};

type CardsProps = {
	items: CardItems[];
};

const DEFAULT_CARDS_ITEMS: CardItems[] = [
	{
		header: 'Emergency services',
		content:
			'We are specialists in all types of doors and windows, providing comprehensive solutions for both residential and commercial properties. Our expert team offers reliable emergency services when you need urgent assistance..',
	},
	{
		header: 'Windows repairs',
		content:
			"Whether it's lock changes, precision drilling,damaged glass, sourcing replacement glass panels. We also specialize in ordering and fitting broken parts for windows and doors, ensuring your property remains secure and functional at all times.",
	},
	{ header: 'Installation', content: 'If you are building a new home or office, we can install new windows and doors for you.' },
	{ header: 'Orders', content: 'We can help you with all your window and door needs.' },
	{ header: 'Contact us', content: 'We are here to help you with all your window and door needs.' },
];
export default function Cards() {
	return (
		<section className='cards-container'>
			<ul className='cards-content'>
				<li className='card section fade-in-section' id='card_1'>
					<div className='glass-card'>
						<h2>Emergency services</h2>
						<p>
							We are specialists in all types of doors and windows, providing comprehensive solutions for both residential and commercial properties. Our expert
							team offers reliable emergency services when you need urgent assistance..
						</p>
					</div>
				</li>
				<li className='card section fade-in-section' id='card_2'>
					<div className='glass-card'>
						<h2>Windows repairs</h2>
						<p>
							Whether it's lock changes, precision drilling,damaged glass, sourcing replacement glass panels. We also specialize in ordering and fitting broken
							parts for windows and doors, ensuring your property remains secure and functional at all times.
						</p>
					</div>
				</li>
				<li className='card section fade-in-section' id='card_3'>
					<div className='glass-card'>
						<h2>Installation</h2>
						<p>If you are building a new home or office, we can install new windows and doors for you.</p>
					</div>
				</li>

				<li className='card section fade-in-section' id='card_4'>
					<div className='glass-card'>
						<h2>Orders</h2>
						<p>We can order new windows and doors for you. We can also order replacement parts for existing windows and doors.</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
