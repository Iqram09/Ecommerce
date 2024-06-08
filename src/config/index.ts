export const PRODUCT_CATEGORIES= [
    {
      label: 'top sell',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=ui_kits`,
          imageSrc: '/nav/EI.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/nav/EI.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=ui_kits',
          imageSrc: '/nav/EI.jpg',
        },
      ],
    },
    {
      label: 'Icons',
      value: 'icons' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/nav/EI.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/EI.jpg',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/nav/EI.jpg',
        },
      ],
    },
  ]