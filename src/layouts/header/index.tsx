import Link from "next/link";
import { IoSettings } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { TokenSelect } from "@/components/token-select";
import { ConnectWalletButton } from "@/components/connect-wallet-button";
import { AccountBalance } from "@/components/account-balance";

import { Logo } from "../logo";
import "./header.scss";

export function Header() {
  return (
    <div className="header flex justify-between items-center px-5">
      <div className="flex">
        <Logo />
        <TopMenu />
      </div>
      <div className="flex">
        <AccountBalance />
        <RightMenu />
      </div>
    </div>
  );
}

function TopMenu() {
  return (
    <div className="top-menu">
      <Menu>
        <MenuButton as="a" className="active">
          Trade
        </MenuButton>
        <MenuItems anchor="bottom" className="top-menu-dropdown">
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/swap">
              Swap
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="active block data-[focus]:bg-blue-100"
              href="/liquidity"
            >
              Liquidity
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/liquidity">
              Perpetual
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/liquidity">
              Options
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/liquidity">
              Bridge
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/liquidity">
              Trading Reward
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Link href="">Buy</Link>
      <Menu>
        <MenuButton as="a">Earn</MenuButton>
        <MenuItems anchor="bottom" className="top-menu-dropdown">
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/settings">
              Farms
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/settings">
              Cake Staking
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/settings">
              Pools
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/settings">
              Position Manager
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block data-[focus]:bg-blue-100" href="/settings">
              Liquid Staking
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

function RightMenu() {
  return (
    <div className="right-menu">
      <ul className="flex mr-4">
        <li>
          <span>
            <MdLanguage fontSize={20} />
          </span>
        </li>
        <li>
          <span>
            <IoSettings fontSize={20} />
          </span>
        </li>
        <li>
          <span>
            <FaBell fontSize={20} />
          </span>
        </li>
      </ul>
      <TokenSelect />
      <ConnectWalletButton />
    </div>
  );
}

export function SubMenu() {
  return (
    <div className="sub-menu">
      <ul className="flex justify-center">
        <li className="active">
          <Link href="">Farms</Link>
        </li>
        <li>
          <Link href="">Cake Staking</Link>
        </li>
        <li>
          <Link href="">Pools</Link>
        </li>
        <li>
          <Link href="">Liquid Staking</Link>
        </li>
      </ul>
    </div>
  );
}
