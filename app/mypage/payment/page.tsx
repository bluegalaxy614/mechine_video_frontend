'use client';
import React from 'react';
import BoxImage from '@/components/boxImage';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';
import { Chip, ChipProps } from '@nextui-org/chip';
import { Tooltip } from '@nextui-org/tooltip';
import { columns, rows } from '../../../config/data';
import { DeleteIcon } from '@/components/icons';

const statusColorMap: Record<string, ChipProps['color']> = {
  支払い: 'success',
  未払い: 'danger',
  保留中: 'warning',
};

type Row = (typeof rows)[0];

export default function PaymentPage() {
  const renderCell = React.useCallback((user: Row, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof Row];

    switch (columnKey) {
      case 'name':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{cellValue}</p>
          </div>
        );
      case 'duration':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{cellValue}</p>
          </div>
        );
      case 'viewers':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{cellValue}</p>
          </div>
        );
      case 'revenue':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{cellValue}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      {/* Section for summary statistics */}
      <section className="flex justify-between max-w-[1280px] mx-auto mt-[90px]">
        <BoxImage
          id={1}
          image={'/icons/icons-checked.png'}
          title="総投稿件数"
          info="250"
        />
        <BoxImage
          id={2}
          image={'/icons/icon-clock.png'}
          title="総視聴時間"
          info="40000"
        />
        <BoxImage
          id={3}
          image={'/icons/icon-coin.png'}
          title="総輸入額"
          info="50万+"
        />
      </section>

      {/* Section for the payment table */}
      <section className="max-w-[1280px] mx-auto mt-[60px] h-[100vh]">
        <div className="w-full rounded-md shadow-md">
          <Table
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === 'actions' ? 'center' : 'start'}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.id} className="cursor-pointer">
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </>
  );
}
