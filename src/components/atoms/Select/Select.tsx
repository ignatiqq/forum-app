import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Wrapper } from '@shared/index';
import { Button } from '@atoms/index';

interface ISelectElement {
  [key: string]: any;
}

interface ISelectProps<T> {
  data: T;
  customValue?: string;
  customLabel?: string;
  selected: ISelectElement | null;
  onChange: (item: ISelectElement) => void;
}

function Select<T extends ISelectElement[]>({
  data,
  customValue = 'value',
  customLabel = 'label',
  selected,
  onChange
}: ISelectProps<T>) {
  const [expanded, setExpanded] = useState(false);

  const changeHandler = (item: ISelectElement) => {
    onChange(item);
    setExpanded(false);
  };

  const toggleDropdown = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Wrapper position={'relative'}>
      <Button data-testid={'button-value-container'} onClick={toggleDropdown}>
        {selected ? selected[customLabel] : 'Select item'}
      </Button>
      <Wrapper top={'100%'} position={'absolute'}>
        <Flex
          data-testid={'select-item-wrapper'}
          minWidth={'300px'}
          customWidth={'100%'}
          flexDirection={'column'}
        >
          {expanded &&
            data &&
            data.length > 0 &&
            data.map((item) => (
              <Button
                textAlign={'left'}
                background={'white'}
                onClick={() => changeHandler(item)}
                key={item[customValue]}
              >
                {item[customLabel]}
              </Button>
            ))}
        </Flex>
      </Wrapper>
    </Wrapper>
  );
}

export default Select;
