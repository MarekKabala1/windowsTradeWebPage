type CardItems = {
  header: string;
  content: string;
};

type CardsProps = {
  items?: CardItems[];
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
  {
    header: 'Installation',
    content:
      'If you are building a new home or office, we can install new windows and doors for you.',
  },
  {
    header: 'Orders',
    content:
      'We can order new windows and doors for you. We can also order replacement parts for existing windows and doors.',
  },
];
export default function Cards({ items = DEFAULT_CARDS_ITEMS }: CardsProps) {
  return (
    <section className="cards-container">
      <ul className="cards-content">
        {items.map((item, index) => {
          return (
            <li
              className="cards section fade-in-section"
              id={`card_${index + 1}`}
              key={index}
            >
              <div className="glass-card card">
                <h2>{item.header}</h2>
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
