import { useRouter } from "next/router";
import ActionButton from "./ActionButton";
import { useMemo, useState } from "react";
import { ClockIcon, HomeIcon, ReceiveIcon, ScanIcon } from "../icons/action";
import { useBaseStore } from "@/stores/base.store";

export default function Footer() {
  const { currentPage, setCurrentPage } = useBaseStore();
  const [active, setActive] = useState(currentPage);
  const actionButton = useMemo(() => {
    const ACTION_BUTTONS = [
      {
        label: "Home",
        value: "home",
        icon: <HomeIcon active={active === "home"} />,
        path: "/",
      },
      {
        label: "History",
        value: "history",
        icon: <ClockIcon active={active === "history"} />,
        path: "/history",
      },
      {
        label: "Pay",
        value: "pay",
        icon: <ScanIcon active={active === "pay"} />,
        path: "/pay",
      },
      {
        label: "Receive",
        value: "receive",
        icon: <ReceiveIcon active={active === "receive"} />,
        path: "/receive",
      },
    ];
    return ACTION_BUTTONS.map((action) => (
      <ActionButton
        active={active === action.value}
        key={action.label}
        label={action.label}
        icon={action.icon}
        onPress={() => {
          setActive(action.value);
          setCurrentPage(action.value);
        }}
        disabled={action.value === "history"}
      />
    ));
  }, [active, setCurrentPage]);
  return (
    <div className="flex items-center w-full min-h-20 bg-white px-[150px] justify-center border-b space-x-3">
      {actionButton}
    </div>
  );
}
