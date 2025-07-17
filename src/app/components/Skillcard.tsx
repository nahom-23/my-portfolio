import React from 'react'
interface SkillCardProps {

  description: string;
  detail: string;
}
const Skillcard: React.FC<SkillCardProps> = ({
  description,
  detail, }) => {

  return (
    <div className="border-[1px] text-[#ABB2BF] hover:border-green-400 transition-colors">
      <div className="">
        <h1 className="text-white mb-3 border-b-[1px] px-3 py-2 text-lg sm:text-xl font-medium">{description}</h1>
        <p className="text-[#ABB2BF] text-sm sm:text-base px-3 py-2 leading-6 sm:leading-8">{detail}</p>
      </div>
    </div>
  )
}

export default Skillcard