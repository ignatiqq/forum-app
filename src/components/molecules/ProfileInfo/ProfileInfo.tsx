import React from 'react';

import { Image } from '@atoms/index';
import { Flex } from '@styled/index';

interface IProfileInfo {
  image: string;
  name: string;
}

const ProfileInfo: React.FC<IProfileInfo> = ({ image, name }) => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <div>
        <Image
          width={'60px'}
          height={'60px'}
          src={image}
          alt={`${name}-image`}
          borderRadius={'100%'}
        />
      </div>
      <div>
        <h2>Name: </h2>
        <span>{name}</span>
      </div>
    </Flex>
  );
};

export default ProfileInfo;
