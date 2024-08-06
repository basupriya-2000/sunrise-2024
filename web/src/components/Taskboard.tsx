import { Badge, Card, Button } from "antd";
import Task from "@/model/Task";
interface TaskboardProps {
  title: string;
  tasks: Task[];
  onComplete?: (taskId: number) => void;
}

function Taskboard({ title, tasks, onComplete }: TaskboardProps) {
  return (
    <div style={{ background: '#141414', padding: 16, borderRadius: 8 }}>
      <h2 style={{color: "white", marginBottom: 16 }}>
        {title}
        <Badge count={tasks.length} style={{ marginLeft: 8, backgroundColor: '' }} />
      </h2>
      {tasks.map((task) => (
        <Card 
          key={task.id} 
          id={`task-card-${task.id}`} 
          style={{ marginBottom: 16, transition: "transform 0.2s ease-in-out" }}
          extra={onComplete && (
            <Button 
              type="primary" 
              onClick={() => onComplete(task.id)}
              style={{ border: 'none', boxShadow: 'none' , backgroundColor: "#141414" }} 
            >
              Done
            </Button>
          )}
        >
          <Card.Meta
            title={
              <>
                <span style={{ fontWeight: 'bold' }}>{`Task ${task.id}`}</span>
                <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '8px 0' }} />
              </>
            }
            description={
              <>
                <div style={{ fontWeight: 'bold' }}>{task.title}</div>
                <div style={{ color: '#8c8c8c' }}>{task.description}</div>
              </>
            }
          />
        </Card>
      ))}
    </div>
  );
}

export default Taskboard;