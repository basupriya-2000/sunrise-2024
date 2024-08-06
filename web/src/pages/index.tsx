import { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Badge, Button } from "antd";
import Task from "@/model/Task";
// import Taskboard from "@/components/Taskboard";
import axios from "axios";
import LayoutContainer from "@/components/LayoutContainer";
import Taskboard from "@/components/Taskboard";
const { Header, Content } = Layout;


export default function Home() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    updateTasks();
  }, []);

  const updateTasks = async () => {
    const alltasks = await axios.get("/api/tasks/alltasks");
    const active = await axios.get("/api/tasks/active");
    const completed = await axios.get("/api/tasks/completed");

    setAllTasks(await alltasks.data);
    setActiveTasks(await active.data);
    setCompletedTasks(await completed.data);
  };

  const handleCompleteTask = async (taskId: number) => {
    await axios.put("/api/tasks/update", { id: taskId, completed: true });
    updateTasks();
  };

  return (
    <LayoutContainer>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Taskboard title="To-Do" tasks={allTasks} />
        </Col>
        <Col xs={24} md={8}>
          <Taskboard
            title="In Progress"
            tasks={activeTasks}
            onComplete={handleCompleteTask}
          />
        </Col>
        <Col xs={24} md={8}>
          <Taskboard title="Completed" tasks={completedTasks} />
        </Col>
      </Row>
    </LayoutContainer>
  );
}
