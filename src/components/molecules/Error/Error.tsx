import React from 'react';

import errorImage from '@assets/images/illustrations/Error.svg';
import { ErrorTitle, Image } from '@atoms/index';
import { ERROR_COMPONENT_TEMPLATE } from '@constants/errors/errors';

interface IErrorComponentProps {
  status: number;
  img?: string;
}

const Error: React.FC<IErrorComponentProps> = ({ status, img = errorImage }) => {
  return (
    <div>
      <ErrorTitle>{ERROR_COMPONENT_TEMPLATE(status)}</ErrorTitle>
      <Image src={img} alt={'error illustration'} />
    </div>
  );
};

export default Error;
