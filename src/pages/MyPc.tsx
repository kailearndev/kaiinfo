import { Card, Space, Tag } from "antd";
import { CSSProperties } from "react";
import { Image } from "antd";

const MyPc = () => {
  const style: CSSProperties = {
    width: "250px",
  };

  return (
    <Card
      style={{
        // width: "600px",
        // height: "500px",
        backgroundColor: "mintcream",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Space direction="vertical">
          <div style={style}>
            <Tag color={"geekblue"}>CPU</Tag>
            <Tag>Intel I5 13500</Tag>
          </div>
          <div style={style}>
            <Tag color={"blue-inverse"}>RAM</Tag>
            <Tag>G.SKILL Trident Z RGB</Tag>
          </div>
          <div style={style}>
            <Tag color={"gold-inverse"}>PSU</Tag>
            <Tag>Xigmatek THOR 750W</Tag>
          </div>{" "}
          <div style={style}>
            <Tag color={"magenta-inverse"}>COOLER</Tag>
            <Tag>Thermalright Aqua Elite</Tag>
          </div>
          <div style={style}>
            <Tag color={"lime-inverse"}>CASE</Tag>
            <Tag>LUMIA</Tag>
          </div>
        </Space>
        <Image
          style={{
            borderRadius: 10,
          }}
          width={220}
          height={200}
          src="https://www.geekawhat.com/wp-content/uploads/2022/05/Best-Cases-2022-Feature-Image.jpg"
        />
      </div>
    </Card>
  );
};

export default MyPc;
