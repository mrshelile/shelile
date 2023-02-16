import { skillSet } from "../constants/SkillSet"
export default function Skills() {
  return (
    <div>
          
    <h2 className="mb-2 text-4xl text-cyan-600  font-bold mt-2">Technicanl Skills:</h2>
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {skillSet.map(item => {
          return (
            <li>{ item.name }</li>
          );
        })}
    </ul>

    </div>
  )
}
