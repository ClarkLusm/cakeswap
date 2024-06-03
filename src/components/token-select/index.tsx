import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import './token-select.scss';

export function TokenSelect() {
  return (
    <Menu>
      <MenuButton as="button" className="token-select-btn active">
        BNB Smart Chain Testnet
      </MenuButton>
      <MenuItems anchor="bottom" className="token-select-dropdown">
        <MenuItem>BNB Chain</MenuItem>
      </MenuItems>
    </Menu>
  );
}
