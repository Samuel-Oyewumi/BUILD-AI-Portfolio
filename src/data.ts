import { Project, Service } from './types';
import godsOwnImage from './assets/gods-own.png';
import asoNovaImage from './assets/aso-nova.png';
import timstarsImage from './assets/timstars.png';

export const projects: Project[] = [
  {
    id: '1',
    title: "God's Own Clothing Brand",
    description: 'An elegant e-commerce storefront showcasing premium clothing collections with scalable sales systems.',
    imageUrl: godsOwnImage,
    link: 'https://god-s-own-clothing-brand.vercel.app/'
  },
  {
    id: '2',
    title: 'ASO NOVA',
    description: 'A chic and contemporary fashion brand website featuring dynamic product displays and automated conversion funnels.',
    imageUrl: asoNovaImage,
    link: 'https://aso-nova-fashion-brand.vercel.app/'
  },
  {
    id: '3',
    title: 'Timstars Apartments',
    description: 'A modern, AI-enhanced short-let and apartment rental booking platform.',
    imageUrl: timstarsImage,
    link: 'https://timstars-apartments-eight.vercel.app/'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'AI-powered websites & apps',
    description: 'Fast, modern builds designed to convert visitors into customers, powered by intelligent architectures.',
    icon: 'cpu'
  },
  {
    id: '2',
    title: 'Customer acquisition systems',
    description: 'AI-assisted tools and automated funnels that bring new customers in consistently and predictably.',
    icon: 'magnet'
  },
  {
    id: '3',
    title: 'E-commerce & sales systems',
    description: 'High-performance online stores and payment flows built to scale securely as your business grows.',
    icon: 'shopping-cart'
  },
  {
    id: '4',
    title: 'Ongoing support & optimization',
    description: 'AI-assisted maintenance and continuous iteration so your system keeps improving long after launch.',
    icon: 'activity'
  }
];
