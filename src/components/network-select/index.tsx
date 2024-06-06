import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "./network-select.scss";

const networkList = {
  97: "BNB Chain",
  1: "Etherium",
};

export function NetworkSelect() {
  return (
    <Menu>
      <MenuButton as="button" className="network-select-btn active">
        BNB Chain
      </MenuButton>
      <MenuItems anchor="bottom" className="network-select-dropdown">
        <MenuItem>
          <span>Select a Network</span>
        </MenuItem>
        <hr />
        {Object.entries(networkList).map(([chainId, name]) => (
          <MenuItem key={chainId}>
            <span>{name}</span>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
