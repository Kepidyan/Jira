import { Avatar, Dropdown, Typography, Flex, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../services/firebase/firebase';
import { getFirstLetters } from '../../../../core/helpers/getFirstLetters';

const { Text } = Typography;



const UserProfile = ({ userProfileInfo }) => {
    const { firstName, lastName, headline, email } = userProfileInfo;

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch(e) {
            console.log(e, 'error')
        }
    }

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
                        {firstName} {lastName}
                    </Text>
    
                    <Text underline>
                        {email}
                    </Text>

                    <Text type="secondary">
                        {headline}
                    </Text>
    
                    <Divider />
                </Flex>
            )
        },
        {
            key: 'logout',
            label: (
                <Text onClick={handleLogout}>
                    Logout
                </Text>
            )
        }
    ]

    return (
        <Dropdown 
            menu={{
                items
            }}
        >
            <Avatar size="large">
                {getFirstLetters(`${firstName} ${lastName}`)}
            </Avatar>
        </Dropdown>
    )
};

export default UserProfile;

