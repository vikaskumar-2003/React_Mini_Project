import "animate.css";
import "./App.css";
import { Badge, Button, Form, Input, Modal, Select, Tag } from "antd";

import { Plus } from "lucide-react";
import Card from "antd/es/card/Card";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false)
  const createTask = (value) => {
    console.log(value);
    
  }

  return (
    <>
      <div className="bg-gray-200 h-screen overflow-hidden">
        <nav className="bg-white h-[60px] fixed top-0 left-0 w-full "></nav>
        <section className=" fixed top-[60px] left-0 h-[calc(100%-120px)] w-full overflow-x-auto overflow-y-hidden grid grid-cols-3 gap-8 p-8">
          <div className="h-full min-h-0">
            <Badge.Ribbon
              text="Highest"
              className="!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 font-medium"
            />

            <div className="bg-white  rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8">
              <button className="focus:shadow-lg hover:scale-105 transition-translate duration-300 items-center py-2 px-3 text-sm bg-gradient-to-br from-blue-600 via-vlue-500 to-blue-600 text-white flex gap-1 font-medium">
                <Plus className="w-4 h-4" />
                Add Task
              </button>
              <div className="flex flex-col gap-8">
                {Array(10)
                  .fill(0)
                  .map((item, index) => (
                    <Card hoverable>
                      <Card.Meta
                        title="Upload new video on youtube"
                        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptas."
                      />
                      <div className="mt-4 flex justify-between">
                        <div>
                          <Tag>Pending</Tag>
                          <Tag className="">Delete</Tag>
                        </div>
                        <Select size="small" placeholder="Change status">
                          <Select.Option value="pending">Pending</Select.Option>
                          <Select.Option value="pending">
                            inProgress
                          </Select.Option>
                          <Select.Option value="pending">
                            Completed
                          </Select.Option>
                        </Select>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>

          <div className="h-full min-h-0">
            <Badge.Ribbon
              text="Medium"
              className="!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 font-medium"
            />
            <div className="bg-white  rounded-lg h-full min-h-0 overflow-auto"></div>
          </div>

          <div className="h-full min-h-0">
            <Badge.Ribbon
              text="Lowest"
              className="!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 font-medium"
            />
            <div className="bg-white  rounded-lg h-full min-h-0 overflow-auto"></div>
          </div>
        </section>
        <footer className="bg-white h-[60px] fixed bottom-0 left-0 w-full "></footer>
        <Modal open footer={null} >
          <h1 className="text-lg font-medium mb-4">New Task</h1>
          <Form onFinish={createTask}>
            <Form.Item name='title' rules={[{required:true}]}>
               <Input size="large" placeholder="Task name"/> 
            </Form.Item>
              <Form.Item name='description' rules={[{required:true}]}>
               <Input.TextArea rows={5} placeholder="Task description"/> 
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" size="large">Submit</Button>
             </Form.Item>
            
           </Form>
        </Modal>
      </div>
    </>
  );
}

export default App;
