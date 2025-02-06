'use client';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    title: 'Home',
    icon: HomeIcon,
    url: '/',
  },
  {
    title: 'Subscriptions',
    icon: PlaySquareIcon,
    url: '/feed/subscriptions',
    auth: true,
  },
  {
    title: 'Trending',
    icon: FlameIcon,
    url: '/feed/trending',
  },
];

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuButton
              tooltip={item.title}
              asChild
              isActive={false}
              onClick={() => {}}
            >
              <Link href={item.url} className="flex items-center gap-4">
                <item.icon />
                <span className="text-sm">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
