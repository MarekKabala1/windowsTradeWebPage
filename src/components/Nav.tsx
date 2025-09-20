type NavItem = {
	href: string;
	label: string;
};

type NavProps = {
	items?: NavItem[];
};

const DEFAULT_NAV_ITEMS: NavItem[] = [
	{ href: '#card_1', label: 'Emergency services' },
	{ href: '#card_2', label: 'Windows repairs' },
	{ href: '#card_3', label: 'Installation' },
	{ href: '#card_4', label: 'Orders' },
	{ href: '#card_5', label: 'Contact us' },
];
export default function Nav({ items = DEFAULT_NAV_ITEMS }: NavProps) {
	return (
		<header className='header'>
			<nav className='nav-bar'>
				<ul className='nav-links'>
					{items.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.href}>{item.label}</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
