import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe("간단한 테스트들", () => {
  it('2 plus 2 equal 4', () => {
    expect(2+2).toBe(4);
  });

  it('2 minus 1 equal 1', () => {
    expect(2 - 1).toBe(1);
  })
})
