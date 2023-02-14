import { MenuData } from "@/components/menu";

const useNav = (): MenuData[] => {
  return [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Scenario',
      link: '/scenario'
    },
    {
      title: 'API',
      link: '/api'
    }
  ];
};

export default useNav;
