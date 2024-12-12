import MyIcon from "./MyIcon";

export default function ServiceHighlights() {
  return (
    <div className="outline-none shadow relative mb-7 transform translate-x-0 translate-y-[-50%] w-[70%] mx-auto p-11 bg-white rounded-md">
      <div className="flex items-center justify-center gap-14">
        <div className="flex gap-4">
          <MyIcon iconName="box" size="46" />
          <div className="flex flex-col">
            <p className="text-lg font-medium text-slate-800">Discount</p>
            <p className="text-sm text-zinc-400">Every week new sales</p>
          </div>
        </div>
        <div className="flex gap-4">
          <MyIcon iconName="delivery-truck" size="46" />
          <div className="flex flex-col">
            <p className="text-lg font-medium text-slate-800">Free Delivery</p>
            <p className="text-sm text-zinc-400">100% Free for all orders</p>
          </div>
        </div>
        <div className="flex gap-4">
          <MyIcon iconName="24-hours" size="46" />
          <div className="flex flex-col">
            <p className="text-lg font-medium text-slate-800">Free Delivery</p>
            <p className="text-sm text-zinc-400">We care your experiences</p>
          </div>
        </div>
        <div className="flex gap-4">
          <MyIcon iconName="shield" size="50" />
          <div className="flex flex-col">
            <p className="text-lg font-medium text-slate-800">Free Delivery</p>
            <p className="text-sm text-zinc-400">100% Secure Payment Method</p>
          </div>
        </div>
      </div>
    </div>
  );
}
