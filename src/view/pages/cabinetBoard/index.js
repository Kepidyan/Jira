import { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { taskStatus } from '../../../core/constants/issue';
import { db, getDocs, collection } from '../../../services/firebase/firebase';
import { Typography } from 'antd';
import './index.css';

const { Title } = Typography;

const taskStatusModel = {
    [taskStatus.TODO.key]: {
        name: taskStatus.TODO.title,
        items: [],
    },
    [taskStatus.IN_PROGRESS.key]: {
        name: taskStatus.IN_PROGRESS.title,
        items: [],
    },
    [taskStatus.TEST.key]: {
        name: taskStatus.TEST.title,
        items: [],
    },
    [taskStatus.DONE.key]: {
        name: taskStatus.DONE.title,
        items: []
    }
};

const CabinetBoard = () => {
    const [columns, setColumns] = useState(taskStatusModel); 

    useEffect(() => {
        const handleGetIssues = async () => {
            const queryData = await getDocs(collection(db, 'issue')); //fetch();
            queryData.docs.map(doc => {
                const data = doc.data();
                const { status } = data;
                taskStatusModel[status].items.push(data);
            })

            setColumns({...taskStatusModel});
        };

        handleGetIssues();
    }, []);
const handleChangeTaskStatus = result => {
    console.log(result, '....');
}

    return (
        <div className="drag_context_container">
            <DragDropContext onDragEnd={handleChangeTaskStatus}>
                {
                    Object.entries(columns).map(([columnId, column]) => {
                        return (
                            <div className="column_container" key={columnId}>
                               <div className="column_header">
                                    <Title level={5} type="secondary">
                                        {column.name}
                                        {' '}
                                        {column.items.length}
                                    </Title>
                               </div>

                                <div>
                                    <Droppable droppableId={columnId} key={columnId}> 
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        padding: 6,
                                                        minHeight: 600,
                                                        backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '#f4f5f7'
                                                    }}
                                                >
                                                    {
                                                        column.items.map((item, index) => {
                                                            return (
                                                                <Draggable 
                                                                    key={item.key}
                                                                    draggableId={item.key} 
                                                                    index={index} 
                                                                >
                                                                    {
                                                                        (provided, snapshot) => {
                                                                            return (
                                                                                <div
                                                                                    className="issue_card_container"
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    style={{
                                                                                        backgroundColor: snapshot.isDragging ?  '#ebecf0' : '#fff',
                                                                                        ...provided.draggableProps.style,
                                                                                    }}
                                                                                >
                                                                                    {item.shortSummary}
                                                                                </div>
                                                                            )
                                                                        }
                                                                    }
                                                                </Draggable>
                                                            )
                                    
                                                        })
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        )
                    })
                }
            </DragDropContext>
        </div>
    )
};

export default CabinetBoard;
