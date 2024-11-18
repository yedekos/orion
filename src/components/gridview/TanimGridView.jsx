'use client'

import { useEffect, useMemo, useState } from 'react'

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper
} from '@tanstack/react-table'

// Data Imports
import defaultData from '@/views/birim-kodlari/birim_data'

// Component Imports
import TemelGridView from './TemelGridView'

// Column Definitions
const columnHelper = createColumnHelper()

const TanimGridView = () => {
  const [columnFilters, setColumnFilters] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [data, setData] = useState(() => defaultData)

  const columns = useMemo(
    () => [
      columnHelper.accessor('birim_adi', { cell: info => info.getValue(), header: 'Birim Adı' }),
      columnHelper.accessor('eFaturaBirimi', { cell: info => info.getValue(), header: 'E-Fatura Birim Kodu' }),
      columnHelper.accessor('paketAdi', { cell: info => info.getValue(), header: 'E-Fatura Paket Kodu' })
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, globalFilter },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  return <TemelGridView globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} table={table} />
}

export default TanimGridView
