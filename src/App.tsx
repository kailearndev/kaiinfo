// const { Header, Content } = Layout;

import {
  BranchesOutlined,
  RocketOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Tag, Typography } from "antd";
import TabComponent from "./components/Tabs";
import "./App.css";
const App: React.FC = () => {
  const { Title } = Typography;
  return (
    <>
      {/* <Avatar size={150} icon={<AntDesignOutlined />} /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          // width: "60%",
        }}
      >
        <Card
          bordered={true}
          style={{
            backgroundColor: "lavender",
            // width: "60%",
            height: "100vh",
          }}
        >
          <Card
            bordered
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "teal",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a4c32afed11a05af4e7a2ac50009e149.jpeg?x-expires=1696053600&x-signature=3xFADyCq8QU3G0thXcE6X9aG%2FH4%3D"
                  size={60}
                />

                <Title
                  style={{
                    color: "whitesmoke",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                  }}
                >
                  Hi I'm Kai
                </Title>
              </div>
              <div>
                <Tag
                  icon={<BranchesOutlined />}
                  style={{
                    width: "auto",
                  }}
                  color={"gold-inverse"}
                >
                  Dev
                </Tag>
                <Tag
                  style={{
                    width: "auto",
                  }}
                  icon={<VideoCameraOutlined />}
                  color={"geekblue-inverse"}
                >
                  Editor
                </Tag>

                <Tag
                  icon={<RocketOutlined />}
                  style={{
                    width: "auto",
                  }}
                  color={"red-inverse"}
                >
                  Stream
                </Tag>
              </div>
            </div>
          </Card>
          <TabComponent />
        </Card>
      </div>
    </>
  );
};

export default App;
