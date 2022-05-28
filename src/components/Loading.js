import { RefreshIcon } from "@heroicons/react/solid";

const Loading = () => (
  <div className="flex grow items-center justify-center">
    <div className="flex flex-col items-center justify-center">
      <RefreshIcon className="h-5 w-5 animate-spin" />
    </div>
  </div>
);

export default Loading;
