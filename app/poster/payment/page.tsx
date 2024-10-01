'use client';
import React, { useCallback, useMemo, useState } from 'react';
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
import { rows } from '@/config/data';
import { DeleteIcon } from '@/components/icons';
import { tableConfig } from '@/config/site';
import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/pagination';

const statusColorMap: Record<string, ChipProps['color']> = {
  支払い: 'success',
  未払い: 'danger',
  保留中: 'warning',
};

type Row = (typeof rows)[0];

export default function PosterPaymentPage() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  const renderCell = useCallback((user: Row, columnKey: React.Key) => {
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
    <div className="min-h-[calc(100vh-90px)] lg:w-full xsm:w-fit">
      {/* Section for summary statistics */}
      <section className="max-w-[1280px] mx-auto flex flex-wrap gap-4 lg:justify-between md:justify-between sm:justify-between xsm:justify-center lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <BoxImage
          id={1}
          image={'/icons/icons-checked.png'}
          title="総投稿件数"
          info="250"
          unit="件"
        />
        <BoxImage
          id={2}
          image={'/icons/icon-cancel.png'}
          title="未払い動画の数"
          info="8"
          unit="件"
        />
        <BoxImage
          id={3}
          image={'/icons/icon-coin.png'}
          title="未払い総額"
          info="4万+"
          unit="円"
        />
      </section>

      {/* Section for the payment table */}
      <section className="max-w-[1280px] mx-auto my-[60px] lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full">
          <div className="flex justify-between my-[20px]">
            <h1 className="text-[24px] text-[#4291EF]">支払い状態</h1>
            <Button className="w-[181px] h-[31px] rounded-full bg-[#4291EF] text-[#FFFFFF] flex justify-center items-center text-[20px]">
              リクエストする
            </Button>
          </div>
          <Table
            isHeaderSticky
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
            classNames={{
              wrapper: 'min-h-[500px]',
              base: 'w-full',
            }}
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader columns={tableConfig}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === 'actions' ? 'center' : 'start'}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={items}>
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
    </div>
  );
}
