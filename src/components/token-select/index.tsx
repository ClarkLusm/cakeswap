import { useState } from "react";
import classnames from "classnames";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoCaretDown } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { TokenModel } from "@/data/models/token.model";
import { BNBToken } from "@/constants/tokens";

import "./token-select.scss";

type TokenSelectProps = {
  activeToken: TokenModel;
  className?: string;
};

const tokenList: [TokenModel] = [BNBToken];

export function TokenSelect({ activeToken, className }: TokenSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={classnames("token-select-btn", className)}
        onClick={() => setIsOpen(true)}
      >
        {activeToken.symbol} <IoCaretDown />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="token-select-dialog max-w-lg space-y-4">
            <header>
              <span>Select a Token</span>
              <button className="bg-transparent">
                <IoMdClose />
              </button>
            </header>
            <div className="token-select-list">
              {tokenList.map((token) => (
                <div className="token-select-item">
                  <span>Logo</span>
                  <div className="token-select-item_title">
                    <span className="token-select-item_symbol">
                      {token.symbol}
                    </span>
                    <span className="token-select-item_name">{token.name}</span>
                  </div>
                  <span className="token-select-item_icon">
                    <FaArrowRight />
                  </span>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
