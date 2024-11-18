'use client'

import Card from '@mui/material/Card'
import GridHeader from './GridHeader'
import GridBody from './GridBody'

const TemelGridView = ({ globalFilter, setGlobalFilter, table }) => {
  return (
    <Card>
      <GridHeader globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} table={table} />
      <GridBody table={table} />
    </Card>
  )
}

export default TemelGridView
