type ServiceItem = {
	imageUrl?: string;
	header: string;
	description: string;
};

type ServicesProps = {
	items?: ServiceItem[];
};

const DEFAULT_SERVICES_ITEMS: ServiceItem[] = [
	{
		imageUrl: '../public/bifold.png',
		header: 'We provide emergency services 24/7',
		description:
			'We provide 24/7 emergency services for all types of doors and windows,we understand that emergencies can happen at any time, which is why we are always available to help you when you need us the most.',
	},
	{
		imageUrl: '../public/window.png',
		header: 'Windows repairs',
		description:
			'Our expert team specializes in repairing all types of windows, from minor fixes to major restorations, using high-quality materials and techniques.',
	},
	{
		imageUrl: '../public/door.png',
		header: 'Doors Installation Height Quality of Service',
		description: 'We offer professional installation services for new windows and doors, ensuring a perfect fit and finish for your home or business.',
	},
];

export default function Services({ items = DEFAULT_SERVICES_ITEMS }: ServicesProps) {
	return (
		<section className='services-section'>
			<div className='services-cards'>
				{items?.map((item, index) => (
					<div className='service-card' key={index}>
						<div className='service-image'>
							<img src={item.imageUrl} alt={item.header} />
						</div>
						<div className='service-content'>
							<h3 className='service-header'>{item.header}</h3>
							<p className='service-description'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
