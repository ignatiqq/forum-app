import React from 'react';
import { Select } from '@atoms/index';
import { renderWithTheme } from '@_tests_/utils/renderWith';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Test select component', () => {
  const selectItemWrapperId = 'select-item-wrapper';
  const emptySelectText = /Select item/;
  const buttonTestId = 'button-value-container';

  test('Test select with no data', () => {
    const data = [];

    const callback = jest.fn();

    const { getByTestId, getByText } = renderWithTheme({
      component: <Select data={data} selected={null} onChange={callback}></Select>
    });

    expect(getByText(emptySelectText)).toBeInTheDocument();

    const selectContainer = getByTestId(selectItemWrapperId);
    expect(selectContainer).toBeInTheDocument();
    expect(selectContainer).toBeEmptyDOMElement();
  });

  test('Test select flow', async () => {
    const optionToTestClickLabel = 'to-click';
    const selected = { value: 'test', label: 'test' };
    const toCall = { value: 'test-to-click', label: 'to-click' };
    const data = [
      { value: 'test', label: 'test' },
      { value: 'test-to-click', label: 'to-click' }
    ];

    const callback = jest.fn();

    const { getByTestId, getByText, queryByTestId, debug } = renderWithTheme({
      component: <Select data={data} selected={selected} onChange={callback}></Select>
    });

    const btn = getByTestId(buttonTestId);

    expect(btn.textContent).toBe('test');
    expect(queryByTestId(optionToTestClickLabel)).not.toBeInTheDocument();

    await userEvent.click(btn);
    expect(getByText(optionToTestClickLabel)).toBeInTheDocument();

    await userEvent.click(getByText(optionToTestClickLabel));
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith(toCall);

    await userEvent.click(btn);
    expect(queryByTestId(optionToTestClickLabel)).not.toBeInTheDocument();
  });
});
