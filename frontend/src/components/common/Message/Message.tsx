import { MessageProps } from "./Message.interface"

export const Message = ({ title, description, button }: MessageProps) => {
  return (
    <div className="bg-cyan-700 text-white text-center flex flex-col gap-6 p-8 rounded-t-3xl lg:justify-between lg:rounded-3xl lg:order-last">
      <div className="flex flex-col gap-3">
        <span className="font-bold text-2xl">{title}</span>
        <span>{description}</span>
      </div>
      <button className="btn" {...button} />
    </div>
  )
}
