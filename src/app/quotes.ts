import { VERSION } from '@angular/core';

export interface Quote {
  title?: string;
  message?: string;
}

export const quotes: Quote[] = [
  {
    title: 'Hello, World! 🎉',
    message: 'Your first toast with ngx-notitia.',
  },
  {
    title: '☕ Toast is served',
    message: 'Perfectly crisp, never burned.',
  },
  {
    title: '😃',
    message: 'Emoji? Absolutely supported.',
  },
  {
    message: 'Titles are optional - a message alone works perfectly.',
  },
  {
    title: 'Title only 👊',
  },
  {
    title: 'It works on my machine',
    message: 'Ship it.',
  },
  {
    title: '🚀 Deployed to production',
    message: 'At 5pm on a Friday.',
  },
  {
    title: 'Bug fixed 🐛',
    message: 'Three new bugs introduced.',
  },
  {
    title: 'You have 99 notifications',
    message: 'None of them are important.',
  },
  {
    message: 'With great power comes great responsibility.',
  },
  {
    title: 'Long message incoming 📜',
    message:
      'ngx-notitia handles multi-line content gracefully. Wrap, stack, or clear - all supported out of the box.',
  },
  {
    title: '',
    message: `Powered by Angular ${VERSION.full}`,
  },
];
