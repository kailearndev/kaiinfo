import { Button, Modal, Space, Tag, Typography } from "antd";
import { useState } from "react";
import mo from "../assets/mo.jpeg";

const ModalDonate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenBank, setIsModalOpenBank] = useState(false);

  const { Text } = Typography;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalBank = () => {
    setIsModalOpenBank(true);
  };

  const handleOkBank = () => {
    setIsModalOpenBank(false);
  };

  const handleCancelBank = () => {
    setIsModalOpenBank(false);
  };
  return (
    <>
      <Space
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button danger onClick={showModal}>
          Momo QR
        </Button>
        <Button sucess type={"dashed"} onClick={showModalBank}>
          Banking
        </Button>
        {/* <div> */}

        {/* </div> */}
      </Space>
      <Modal
        width={320}
        closeIcon={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={mo} width={300} height={300}></img>
        </div>
      </Modal>
      <Modal
        width={200}
        closeIcon={false}
        open={isModalOpenBank}
        onOk={handleOkBank}
        onCancel={handleCancelBank}
        footer
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="vertical">
            <Tag color={"success"}>VIETCOMBANK(VCB)</Tag>
            <Text code type="danger" copyable>
              1020366654
            </Text>
            <Tag color={"geekblue-inverse"}>NGUYEN VU LUAN</Tag>
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default ModalDonate;
