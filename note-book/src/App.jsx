import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./App.css";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import {Button, Divider, Empty, Form, Input, Modal} from 'antd'
import { useNote } from "./zustand/useNote";
import {nanoid} from 'nanoid'
import TextArea from "antd/es/input/TextArea";
import moment from 'moment'
const desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repellendus cupiditate blanditiis amet doloremque, eveniet magnam aut doloribus.'


function App() {
  const [open, setOpen] = useState(false);
   const[form]=Form.useForm()
  const { notes, setNote,deleteNote,updateNote } = useNote()
  const [read, setRead] = useState(null)
  const[editId,setEditId]=useState(null)
  console.log(read);
  
  const editNote = (item) => {
    setOpen(true)
    form.setFieldValue(item)
    setEditId(item.id)
  }

  const removeNote = (id) => {
    deleteNote(id)
    setRead(null)
  }

  const handleClose=()=>{
    setOpen(false)
    form.resetFields()
    setEditId(null)
  }

  const createNote = (value) => {
    console.log(value);
    value.id = nanoid()
    value.date=new Date()
    setNote(value)
    handleClose()
  }

  const saveNote = (values) => {
    values.date=new Date()
    updateNote(editId, values)
    handleClose()
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <aside className=" overflow-auto space-y-6 px-4 py-8 bg-[linear-gradient(348deg,_#00c6ff,_#0072ff,hsl(256.3,_65.9948664095569%,_55.694092001575235%))] fixed top-0 left-0 w-[300px] h-full ">
        <div className="bg-white p-3 rounded-lg space-y-6">
          {
            notes.map((item, index) => (
              <button onClick={()=>{setRead(item)}} key={index} className='flex items-start gap-1 hover:bg-gray-100 w-full hover:p-3 duration-200 hover:cursor-pointer' >
                <FaFile className="w-5 h-5 mt-[5px]" />
                <div className="flex flex-col">
                  <label className="font-medium text-black/80 text-left " >{item.filename }</label>
                  <label className="text-xs text-gray-500 text-left" > {moment(item.date).format('DD MMM YYYY, HH:mm A')  }</label>
                </div>
               
              </button>
            ))
                }
        </div>
        <button onClick={()=>setOpen(true)}
          className="flex items-center gap-1 bg-rose-500 text-white font-medium w-full py-3 justify-center hover:scale-105 transition-transform duration-300 ">
            <FaPlus />
          New File
        </button>
      </aside>
      <section className="ml-[300px] py-12">
        {read ? (
          <div className="w-10/12 mx-auto bg-white  rounded-xl ">
          <div className="px-6 py-4 border-b border-gray-300 border-dash flex justify-between items-center ">
            <div>
                <h1 className="text-lg font-medium capitalize">{read.filename }</h1>
              <label className="text-gray-500 text-xs">
                 {moment(read.date).format('DD MM YYYY,hh:mm A')}
              </label>
            </div>

            <div className="space-x-3"> 
              <button onClick={()=>editNote(read)} className="bg-green-500 p-2 rounded text-white hover:bg-green-600 hover:scale-105 transition-transform duration-300">
                <MdEdit size={15} className="w-4 h-4" />
              </button>
              <button onClick={()=>removeNote(read.id)} className="bg-rose-500 p-2 rounded text-white hover:bg-rose-600 hover:scale-105 transition-transform duration-300">
                <FaTrashAlt size={15} className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-500">
                 {read.content}
            </p>
          </div>
        </div>
        ):(<div className="w-10/12 mx-auto bg-white  rounded-xl p-16 flex items-center justify-center ">
            <Empty
              description="choose a file to read"
            />
         
        </div>)}
       
      </section>
      <Modal open={open} onCancel={handleClose} footer={null} width={'80%'} maskClosable={false} >
        <h1 className="text-xl font-semibold">Create a new file</h1>
        <Divider />
        <Form layout="vertical" onFinish={editId?saveNote:createNote} form={form} initialValues={{content:desc}} >
          <Form.Item
            label='Filename'
            name='filename'
            rules={[{required:true}]}
          >
            <Input size="large" placeholder="Enter file name"/>

          </Form.Item>

           <Form.Item
            label='Content'
            name='content'
            rules={[{required:true}]}
          >
            <TextArea size="large" placeholder="Content goes here..." rows={10 }  />

          </Form.Item>

          <Form.Item>
            {editId ? (
               <Button size="large" type="primary" htmlType="submit" danger>
                Save
            </Button>
            ):( <Button size="large" type="primary" htmlType="submit">
             Submit
            </Button>)}
           
          </Form.Item>
           
        </Form>

        
      </Modal>
    </div>
  );
}

export default App;
