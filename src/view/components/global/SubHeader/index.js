import { Input, Avatar, Button, Divider } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import './index.css'

const SubHeader = () => {
    return(
        <div className="sub_header">
            <Input.Search 
                className="search_input"
                placeholder="search"
            />
            <Divider type="vertical"/>
            <Avatar.Group
                max={{
                    count: 4,
                    style: {color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer'},
                    popover: {
                        trigger: 'hover'
                    }
                }}
            >

                <Avatar style={{backgroundColor: 'Green'}}>
                    DS
                </Avatar>

                <Avatar style={{backgroundColor: 'Indigo'}}>
                    AK
                </Avatar>

            </Avatar.Group>

            <Divider type="vertical"/>
            
            <Button type="primary" icon={<PlusOutlined/>}>
                Creat Issue
            </Button>
        </div>
    )
}

export default SubHeader