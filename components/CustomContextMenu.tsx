"use client"

import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import { Copy, Share, Edit, Delete, Info } from 'lucide-react';

interface CustomContextMenuProps {
  children: React.ReactNode;
}

export default function CustomContextMenu({ children }: CustomContextMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Dropdown
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom-start"
        style={{ position: 'fixed', left: position.x, top: position.y }}
      >
        <DropdownTrigger>
          <span style={{ position: 'fixed', left: -1000 }}></span>
        </DropdownTrigger>
        <DropdownMenu aria-label="Custom Context Menu">
          <DropdownSection title="Actions" showDivider>
            <DropdownItem
              key="copy"
              shortcut="⌘C"
              startContent={<Copy className="w-4 h-4" />}
              description="Copy the selected content"
            >
              Copy
            </DropdownItem>
            <DropdownItem
              key="share"
              shortcut="⌘S"
              startContent={<Share className="w-4 h-4" />}
              description="Share this content"
            >
              Share
            </DropdownItem>
            <DropdownItem
              key="edit"
              shortcut="⌘E"
              startContent={<Edit className="w-4 h-4" />}
              description="Edit the selected content"
            >
              Edit
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Danger Zone">
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              shortcut="⌘⌫"
              startContent={<Delete className="w-4 h-4" />}
              description="Permanently delete the selected item"
            >
              Delete
            </DropdownItem>
          </DropdownSection>
          <DropdownItem
            key="info"
            startContent={<Info className="w-4 h-4" />}
            description="View more information"
          >
            More Info
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {children}
    </div>
  );
}