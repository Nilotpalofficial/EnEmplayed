import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Badge } from './badge'

const AppliedJobs = () => {
  return (
    <div className='mt-5'>
      <Table>
        <TableCaption>A List Your Applied Job</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>job role</TableHead>
                <TableHead>company</TableHead>
                <TableHead classname="text-right">status</TableHead>
            </TableRow>
        </TableHeader>
            <TableBody>
                {
                    [1,2,3,4,5,6].map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell>25-10-2024</TableCell>
                            <TableCell>FrontEnd Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell classname="text-right"> <Badge className="bg-blue-500 cursor-pointer">selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        
      </Table>
    </div>
  )
}

export default AppliedJobs
