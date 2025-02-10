import Icon from "@ant-design/icons";

const CustomSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M640 576h-256a32 32 0 1 1 0-64h256a32 32 0 1 1 0 64m0 160h-256a32 32 0 1 1 0-64h256a32 32 0 1 1 0 64m223.808-320h-223.744A64.128 64.128 0 0 1 576 351.872V128H223.808A64 64 0 0 0 160 192.064v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.84V417.632c0-0.544-0.16-1.12-0.192-1.664"
      p-id="7592"
    ></path>

    <path
      d="M833.728 340.128l-163.904-178.144c-7.744-8.448-18.4-15.552-29.824-21.28v211.2l202.4 0.064c-2.752-4.192-5.536-8.448-8.64-11.84"
      p-id="7591"
    ></path>
  </svg>
);

const CustomAliados = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M832 896V212.8c0-8.8-7.2-16-16-16H640V80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v816h-64v64h768v-64h-64zM384 768h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m128 512h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m192 512h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z m0-128h-64v-64h64v64z"
      p-id="4172"
    ></path>
  </svg>
);

export const NewIcons = (props: any) => (
  <Icon component={CustomSvg} {...props} />
);

export const AllyIcons = (props: any) => (
  <Icon component={CustomAliados} {...props} />
);

//export default NewIcons;
