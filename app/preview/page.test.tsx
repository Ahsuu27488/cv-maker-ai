import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PreviewPage from './page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('html-to-image', () => ({
  toPng: jest.fn(),
}));

jest.mock('jspdf', () => jest.fn());

describe('PreviewPage', () => {

});
