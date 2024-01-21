import { Button, cn } from "@nextui-org/react";
import HomeIcon from "../icons/action/Home";

interface ActionButtonProps {
  active?: boolean;
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}

export default function ActionButton({
  active = false,
  icon,
  label,
  onPress,
}: ActionButtonProps) {
  return (
    <Button
      className={cn(
        active && "bg-[#F9FAFB]",
        "flex flex-col w-20 h-full items-center py-3",
      )}
      variant="light"
      onPress={onPress}
    >
      {icon}
      <div className="text-xs text-secondary font-semibold">{label}</div>
    </Button>
  );
}
