'use client';
import { DeleteIcon, EditIcon, SearchIcon } from '@/components/icons';
import { Chip, ChipProps } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { Pagination } from '@nextui-org/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';
import { userTableRows } from '@/config/data';
import { userTableConfig } from '@/config/site';
import { useCallback, useMemo, useState } from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import { Divider } from '@nextui-org/divider';
import { Avatar } from '@nextui-org/avatar';

const statusColorMap: Record<string, ChipProps['color']> = {
  Admin: 'primary',
  有料会員: 'success',
  無料会員: 'danger',
};

type Row = (typeof userTableRows)[0];
export default function UserManagePage() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(userTableRows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return userTableRows.slice(start, end);
  }, [page]);

  const renderCell = useCallback((users: Row, columnKey: React.Key) => {
    const cellValue = users[columnKey as keyof Row];

    switch (columnKey) {
      case 'avatar':
        return (
          <div className="flex flex-col rouned-md">
            <Avatar src={cellValue} />
          </div>
        );
      case 'name':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{cellValue}</p>
          </div>
        );
      case 'mail':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] truncate">{cellValue}</p>
          </div>
        );
      case 'date':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{cellValue}</p>
          </div>
        );
      case 'count':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] rounded-full bg-[#E4F1FF] text-[#4291EF] mx-auto px-[5px]">
              {cellValue}
            </p>
          </div>
        );
      case 'role':
        return (
          <Chip
            color={statusColorMap[users.role]}
            size="md"
            variant="flat"
            className="!w-[200px] flex mx-auto"
          >
            {cellValue}
          </Chip>
        );
      case 'expired':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{cellValue}</p>
          </div>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="primary" content="Edit">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
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
    <section className="h-[calc(100vh-90px)] flex flex-col px-[60px] py-[30px] gap-12">
      <div className="max-w-[913px] lg:px-0 md:px-[40px] sm:px-[50px] xsm:px-[30px]">
        <Input
          isClearable
          fullWidth={true}
          radius="lg"
          className="h-[48px] rounded-full"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl',
              'bg-default-200/50',
              'dark:bg-default/60',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-default-200/70',
              'dark:hover:bg-default/70',
              'group-data-[focus=true]:bg-default-200/50',
              'dark:group-data-[focus=true]:bg-default/60',
              '!cursor-text',
            ],
          }}
          placeholder="検索..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <div className="w-full mx-auto lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full">
          <Table
            isHeaderSticky
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
            classNames={{
              wrapper: 'min-h-[500px]',
              base: 'w-full',
            }}
            topContent={
              <div>
                <div className="flex justify-start my-[20px]">
                  <h1 className="text-[24px] text-[#4291EF]">ユーザリスト</h1>
                </div>
                <Divider />
              </div>
            }
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
            <TableHeader columns={userTableConfig}>
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
      </div>
    </section>
  );
}
