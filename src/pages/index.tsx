import ButtonGroup from '@/containers/ButtonGroup'
import ItemsList from '@/containers/ItemsList'
import { Button, Checkbox, Form, Input, InputNumber, Modal } from 'antd'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const showModal = () => {
    setOpen(true)
  }

  const onFinish = ({
    itemType,
    price,
  }: {
    itemType: string
    price: number
  }) => {
    console.log('Success:', itemType, price)
    setOpen(false)
    form.resetFields()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <main>
      {/* <!-- 按鈕區塊 --> */}
      <ButtonGroup />

      {/* 列表區塊 */}
      <ItemsList />

      <Button
        type='primary'
        onClick={showModal}
      >
        Open Modal with async logic
      </Button>
      <Modal
        title='新增品項'
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form
          name='basic'
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          form={form}
        >
          <Form.Item
            label='品項：'
            name='itemType'
            rules={[{ required: true, message: '請輸入品項' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='價格：'
            name='price'
            rules={[{ required: true, message: '請輸入價格' }]}
          >
            <InputNumber
              className='w-full'
              inputMode='numeric'
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='w-full'
            >
              新增品項
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </main>
  )
}
