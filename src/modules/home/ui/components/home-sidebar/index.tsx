import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { MainSection } from './main-section';

export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 border-none">
      <SidebarContent className="bg-background">
        <MainSection />
      </SidebarContent>
    </Sidebar>
  );
};
