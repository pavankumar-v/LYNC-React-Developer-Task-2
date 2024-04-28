import { Flex } from 'antd';
import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const Navbar: React.FC = () => {
  return (
    <nav>
      <Flex className="container">
        {/* logo */}
        <Title level={5} className="">
          FileDrive
        </Title>
      </Flex>
    </nav>
  );
};

export default Navbar;
