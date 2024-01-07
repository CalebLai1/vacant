import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import siteBg from '../assets/site-bg.jpg';

const ToDo = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({name: "", priority: "", dueDate: ""});
    const [completedTasks, setCompletedTasks] = useState(0);
    const [skippedTasks, setSkippedTasks] = useState(0);

    const handleAdd = () => {
        setItems(oldItems => [...oldItems, {...newItem, status: 'pending'}].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
        setNewItem({name: "", priority: "", dueDate: ""});
    };

    const handleComplete = (index) => {
        let newItems = [...items];
        newItems[index].status = 'completed';
        setItems(newItems);
        setCompletedTasks(completedTasks + 1);
    };

    const handleSkip = (index) => {
        let newItems = [...items];
        newItems[index].status = 'skipped';
        setItems(newItems);
        setSkippedTasks(skippedTasks + 1);
    };

    const handleRemove = (index) => {
        let newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const priorities = ['High', 'Medium', 'Low'];
    const colors = {'High': '#FFC1C1', 'Medium': '#FFFFB3', 'Low': '#B3FFCC'};

    return (
        <div style={{ 
            backgroundImage: `url(${siteBg})`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            color: 'black',
            padding: '20px'
          }}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '200px', height: '250px', border: '1px solid black', padding: '10px', background: 'white'}}>
              <h1 style={{fontWeight: 'bold', fontSize: '2em', marginBottom: '20px'}}>To Do List</h1>

                <input value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} placeholder="Task Name" />
                <select value={newItem.priority} onChange={e => setNewItem({...newItem, priority: e.target.value})}>
                    
                    <option value="">Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input type="datetime-local" value={newItem.dueDate} onChange={e => setNewItem({...newItem, dueDate: e.target.value})} />
                <button onClick={handleAdd} style={{color: 'red', alignSelf: 'flex-end'}}>Add</button>
                <div>
                    {`Completed Tasks: ${completedTasks}, Skipped Tasks: ${skippedTasks}`}
                </div>
            </div>
            {priorities.map(priority => (
                <div key={priority} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    {items.map((item, index) => (
                        item.priority === priority && 
                        <div key={index} style={{background: colors[item.priority], padding: '10px', margin: '10px', color: 'black'}}>
                        <p style={{marginBottom: '10px', textDecoration: item.status !== 'pending' ? 'line-through' : 'none'}}>{`Task: ${item.name}`}</p>
                        <p style={{marginBottom: '10px', textDecoration: item.status !== 'pending' ? 'line-through' : 'none'}}>{`Priority: ${item.priority}`}</p>
                        <p style={{marginBottom: '10px', textDecoration: item.status !== 'pending' ? 'line-through' : 'none'}}>{`Due Date: ${new Date(item.dueDate).toLocaleString()}`}</p>
                        <button onClick={() => handleComplete(index)} style={{marginRight: '10px'}}>Complete</button>
                        <button onClick={() => handleSkip(index)} style={{marginRight: '10px'}}>Skip</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </div>                
                    ))}
                </div>
            ))}
            <div style={{position: 'absolute', bottom: '10px', left: '10px', border: '1px solid black', padding: '10px', background: 'white'}}>
    <Link to="/TotallyAllServices"><button style={{ fontSize: '30px' }}>Back</button></Link>
</div>
        </div>
    );
};

export default ToDo;
