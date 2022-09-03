import React from 'react';

import { Image } from '@atoms/index';
import { Flex, Text } from '@shared/index';
import Heading from '@shared/Title/Title';
import styled from 'styled-components';

interface IProfileInfo {
  image: string;
  name: string;
  bio: string;
}

const ProfileInfo: React.FC<IProfileInfo> = ({ image, name, bio }) => {
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
      <Flex alignItems={'center'}>
        <Heading level={3}>Name:</Heading>
        <Text fontSize={'20px'}>{name}</Text>
      </Flex>

      <Text margin={'10px 0px'} fontSize={'14px'}>
        {bio}
      </Text>
    </Flex>
  );
};

export default ProfileInfo;
