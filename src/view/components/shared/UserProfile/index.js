import { Avatar, Dropdown, Typography, Flex, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const items = [
    {
        key: 'profile',
        label: (
            <Flex vertical justify="center" align="center">
                <Avatar 
                    size={64}
                    icon={<UserOutlined />}
                />

                <Text>
                    Davit Sargsyan
                </Text>

                <Text underline>
                    sargsyand89@gmail.com
                </Text>

                <Divider />
            </Flex>
        )
    },
    {
        key: 'logout',
        label: 'Logout'
    }
]

const UserProfile = () => {
    return (
        <Dropdown 
            menu={{
                items
            }}
            
        >
            <Avatar size="large">
                D S
            </Avatar>
        </Dropdown>
    )
};

export default UserProfile;