import { Tabs } from "antd";
import type { TabsProps } from "antd";
import MyPc from "../pages/MyPc";
import Donate from "../pages/Donate";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Cấu Hình PC ",
    children: <MyPc />,
  },
  {
    key: "2",
    label: "Donate $",
    children: <Donate />,
  },
];

const TabComponent: React.FC = () => (
  <Tabs
    style={{
      maxWidth: 320,
    }}
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    centered
  />
);

export default TabComponent;
