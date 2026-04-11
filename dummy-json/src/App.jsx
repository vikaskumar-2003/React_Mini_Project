import { useState } from "react";
import "animate.css";
import { FaRegCopy } from "react-icons/fa";
import { nanoid } from "nanoid";
import { Button, Card, Empty, Input, InputNumber, message, Select, Tooltip } from "antd";
import Form from "antd/es/form/Form";
import { faker, Faker } from "@faker-js/faker";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const [reload, setReload] = useState("");

  const generateUser = () => {
    return {
      id: nanoid(12),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      mobile: faker.phone.number({ style: "international" }),
      city: faker.location.city(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      gender: faker.person.gender(),
      state: faker.location.state(),
      country: faker.location.country(),
      pinCode: faker.location.zipCode(),
    };
  };

   const generateProducts = () => {
    return {
      id: nanoid(12),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription,
      price: faker.commerce.price(),
      discount: faker.commerce.price({min:1,max:40}),
      rating: faker.commerce.price({min:1,max:5}),
      brand: faker.company.buzzNoun(),
      image: faker.image.urlLoremFlickr({category:'product'}),
      createdAt:faker.date.anytime(),
    };
  };

  const generatePayments = () => {
    return {
      id: nanoid(12),
      user: {
        id: nanoid(),
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        mobile:faker.phone.number({style:'international'})
      },
      product: {
        id: nanoid(),
        title: faker.commerce.productName(),

      },
      amount: Number(faker.commerce.price()),
      orderId: `OID-${nanoid()}`,
      transactionId: `TSC-${nanoid()}`,
      method: "UPI",
      createdAt:faker.date.anytime(),
    };
  };


  const onCopy = () => {
    navigator.clipboard.writeText(reload)
    message.success("done")
  };

  const generateData = (value) => {
    console.log(value);
          const temp = [];
    for (let i = 0; i < value.number; i++) {

      if (value.data === "users") {
        let data = generateUser();
        temp.push(data);
        
      }
      else if (value.data === 'products') {
       
        temp.push(generateProducts())
      }
      else if (value.data === "payments") {
        temp.push(generatePayments())
      }
    }
    console.log(temp);
    const str=JSON.stringify(temp,null,2)
    setReload(str)
    
    
    
    
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="w-9/12  mx-auto  flex flex-col gap-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Dummy Date Generator</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              ducimus?
            </p>
          </div>

          <Card>
            <Form
              className="flex gap-3"
              layout="vertical"
              onFinish={generateData}
              initialValues={{
                data: "users",
                number: 24,
              }}
            >
              <Form.Item
                className="w-full"
                label="Choose Data"
                name="data"
                rules={[{ required: true }]}
              >
                <Select size="large" placeholder="Choose data">
                  <Select.Option value="users">User</Select.Option>
                  <Select.Option value="products">Products</Select.Option>
                  <Select.Option value="payments">Payments</Select.Option>
                  <Select.Option value="employees">Employee</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                className="w-full"
                label="Number of Data"
                name="number"
                rules={[{ required: true }]}
              >
                <InputNumber
                  className="!w-full"
                  size="large"
                  placeholder="Enter number of data"
                  max={100}
                />
              </Form.Item>

              <Form.Item label=" ">
                <Button htmlType="submit" size="large" type="primary">
                  Generate
                </Button>
              </Form.Item>
            </Form>
          </Card>
          {
            reload.length === 0 ?(
              <Empty description="Click generate button to get data" />) :
              (<Card title="Users" extra={
            <Tooltip title="Copy data">
              <FaRegCopy size={20} onClick={onCopy}/>
            </Tooltip>
          }>
            <SyntaxHighlighter language="javascript" style={atomDark } showLineNumbers>
             {reload}
         </SyntaxHighlighter>
          </Card>)
          }

          
        </div>
      </div>
    </>
  );
}

export default App;
