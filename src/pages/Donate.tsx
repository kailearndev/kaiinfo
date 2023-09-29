import { FacebookFilled } from "@ant-design/icons";
import { Button, Divider, Typography } from "antd";
import ds from "../assets/ds.png";
// import React from "react";
import ModalDonate from "../components/ModalDonate";
const { Title } = Typography;

const Donate = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title code>DONATE QUA CÁC HÌNH THỨC</Title>
      <ModalDonate />
      <Divider dashed />
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          danger
          type="link"
          target="_blank"
          href="https://www.youtube.com/@kaiiscoming?sub_confirmation=1"
          icon={<FacebookFilled />}
        >
          Youtube
        </Button>
        <Divider
          dashed
          style={{
            height: "40px",
          }}
          type="vertical"
          orientation="center"
        />
        <Button
          success
          type="link"
          target="_blank"
          href="https://discord.gg/KQ6M63z7qG"
          icon={<img src={ds} width={"14px"} height={"14px"} />}
        >
          Discord
        </Button>
      </div>
    </div>
  );
};

export default Donate;
