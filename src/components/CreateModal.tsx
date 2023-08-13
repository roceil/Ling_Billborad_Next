import axios from 'axios'
import dayjs from 'dayjs'
import { Button, Form, Input, InputNumber, Modal } from 'antd'
import { useCreateModalStore, useSaleItemsStore } from '@/assets/store'

export default function CreateModal() {
  const [form] = Form.useForm()

  const modalStatus = useCreateModalStore(state => state.open)
  const setOpen = useCreateModalStore(state => state.setOpen)
  const setRenderData = useSaleItemsStore(state => state.setRenderData)

  // ====== 新增資料 POST API  ======
  const createSaleItem = async (itemType: string, price: number) => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/addnewitem`,
        {
          itemName: itemType,
          price,
          createdAt: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          changedAt: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        },
      )
      console.log(data)
      setRenderData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish = ({
    itemType,
    price,
  }: {
    itemType: string
    price: number
  }) => {
    createSaleItem(itemType, price)
    setOpen(false)
    form.resetFields()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      title='新增品項'
      open={modalStatus}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <Form
        name='basic'
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        form={form}
      >
        <Form.Item
          label='品項：'
          name='itemType'
          rules={[
            {
              required: true,
              message: '請輸入品項',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='價格：'
          name='price'
          rules={[
            {
              required: true,
              message: '請輸入價格',
            },
          ]}
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
  )
}
