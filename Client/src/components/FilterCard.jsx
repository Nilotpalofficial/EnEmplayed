import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const FilterCard = () => {
    const filterData = [
        {
            filterType:"Location",
            Array:["kolkata","Delhi NCR","Bengalore","Hyderbad","Puna","Mumbai"]
        },
        {
            filterType:"Industry",
            Array:["Frontend Developer","Backend Developer","ReactJs Developer","FullStack Developer"]
        },
        {
            filterType:"Salary",
            Array:["0-40k","42-1Lakh","1Lakh to 5Lakh"]
        },
    ]
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterData.map((data,index) =>(
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.Array.map((item,index) =>(
                            <div className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item}/>
                                <Label >{item}</Label>
                            </div>
                        ))
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
