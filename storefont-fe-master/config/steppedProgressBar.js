const STEPS = {
  '/post-listing/property': [
    {
      status: 'process',
      title: 'listingInfo',
      href: '#',
    },
    {
      status: 'wait',
      title: 'listingEditor',
      href: '#',
    },
    {
      status: 'wait',
      title: 'listingPayment',
      href: '#',
    },
  ],
  '/post-listing/listing': [
    {
      status: 'finish',
      title: 'listingInfo',
      href: '/post-listing/property',
    },
    {
      status: 'process',
      title: 'listingEditor',
      href: '#',
    },
    {
      status: 'wait',
      title: 'listingPayment',
      href: '#',
    },
  ],
  '/post-listing/payment': [
    {
      status: 'finish',
      title: 'listingInfo',
      href: '/post-listing/property',
    },
    {
      status: 'finish',
      title: 'listingEditor',
      href: '/post-listing/listing',
    },
    {
      status: 'process',
      title: 'listingPayment',
      href: '#',
    },
  ],
};

export default STEPS;
