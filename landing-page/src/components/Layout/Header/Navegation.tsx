import { FC } from "react";
import { Menu, ConfigProvider } from "antd";
import {
  HomeFilled,
  PhoneFilled,
  ThunderboltFilled,
  ProductFilled,
} from "@ant-design/icons";
import { globalStyles } from "@/styles/globalStyles";
import { NewIcons, AllyIcons } from "@/assets/icons/logoCustom";

export const Navigation: FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemSelectedColor: "rgb(126, 172, 117)",
            horizontalItemSelectedBg: "rgb(235, 255, 232)",
            itemMarginInline: 2,
          },
        },
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <Menu.Item
          key="1"
          icon={<HomeFilled />}
          style={globalStyles.menuItemStyle}
        >
          Inicio
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<NewIcons style={{ fontSize: "1.2rem" }} />}
          style={globalStyles.menuItemStyle}
        >
          Noticias
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<AllyIcons />}
          style={globalStyles.menuItemStyle}
        >
          Aliados
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<ProductFilled />}
          style={globalStyles.menuItemStyle}
        >
          Servicios
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<PhoneFilled />}
          style={globalStyles.menuItemStyle}
        >
          Contacto
        </Menu.Item>
      </Menu>
    </ConfigProvider>
  );
};
