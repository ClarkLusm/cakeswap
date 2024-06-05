"use client";

import { TbMoneybag } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { MdEdit } from "react-icons/md";

import { TokenSelect } from "@/components/token-select";
import { BNBToken } from "@/constants/tokens";

import "./swap.scss";

export default function Page() {
  const onSettings = (e: any) => {};

  return (
    <div className="swap-page flex justify-center p-8">
      <div className="form-wrap w-[400px] rounded-xl">
        <div className="px-6 py-4">
          <h3 className="title mb-2">Swap</h3>
          <h6 className="sub-title">Trade tokens in an instant</h6>
          <div className="flex justify-end gap-2">
            <button>
              <TbMoneybag />
            </button>
            <button>
              <FaChartBar />
            </button>
            <button>
              <IoMdSettings />
            </button>
            <button>
              <MdOutlineHistory />
            </button>
            <button>
              <IoMdRefresh />
            </button>
          </div>
        </div>
        <div className="from-token px-6 mb-4">
          <TokenSelect activeToken={BNBToken} />
          <div className="token-value">
            <input
              type="text"
              placeholder="0.0"
              className="token-value_input"
            />
            <div className="token-to-usd flex justify-end text-xs">
              123.23233
            </div>
          </div>
        </div>
        <div className="exchange flex justify-center mb-4">
          <button className="exchange-btn">
            <IoArrowDown />
          </button>
        </div>
        <div className="to-token px-6 mb-4">
          <TokenSelect activeToken={BNBToken} />
          <div className="token-value">
            <input
              type="text"
              placeholder="0.0"
              className="token-value_input"
            />
          </div>
        </div>
        <div className="py-4 px-6 mb-4">
          <div className="rate-detail flex justify-between">
            <span className="text-xs text-bold text-secondary">Price</span>
            <span className="flex">
              <span className="text-xs">1 CAKE = 316969278 tBNB</span>
              <button className="text-sm ml-1">
                <LuRefreshCcw />
              </button>
            </span>
          </div>
          <div className="rate-detail flex justify-between mb-8">
            <div className="flex items-center">
              <span className="text-xs text-bold text-secondary">
                Slippage Tolerance
              </span>
              <button onClick={onSettings} className="ml-2 text-primary">
                <MdEdit />
              </button>
            </div>
            <span className="font-bold text-primary text-sm">0.5%</span>
          </div>
          <button className="btn btn-primary large w-full">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
