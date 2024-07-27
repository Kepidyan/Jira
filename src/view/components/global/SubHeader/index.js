import { Input, Avatar, Button, Divider } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import { useState } from "react"
import CreatIssueModal from "../../shared/CreateIssueModal"
import './index.css'

const SubHeader = () => {
    const [modalVisible, setModalVisible] = useState(false)
    
    const handleOpenModal = () => {
        setModalVisible(true)
    }

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
            
            <Button 
                type="primary" 
                icon={<PlusOutlined/>}
                onClick={handleOpenModal}
            >
                Creat Issue
            </Button>

            <CreatIssueModal 
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </div>
    )
}

export default SubHeader