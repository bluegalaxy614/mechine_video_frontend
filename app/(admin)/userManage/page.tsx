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
import { userTableConfig } from '@/config/site';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import { Divider } from '@nextui-org/divider';
import { Avatar } from '@nextui-org/avatar';
import { deleteUserById, getUsers, searchUsersInString } from '@/lib/api';
import { formatDate } from '@/utils/utils';
import { Badge } from '@nextui-org/badge';

const statusColorMap: Record<string, ChipProps['color']> = {
  Admin: 'primary',
  有料会員: 'success',
  無料会員: 'danger',
};

interface Row {
  _id: string;
  avatar: string;
  name: string;
  email: string;
  createdAt: string;
  status: string;
  role: string;
  expired: {
    start: string;
    end: string;
  };
  posterCounts: number;
  totalPlayedTime : number;
  totalIncome: number;
  paid: number;
  unPaid:number;
  actions: string;
}

export default function UserManagePage() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<Row[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState<string>('');
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers({
          perPage: rowsPerPage,
          page: page,
          sort: 'createdAt',
        });
        setTotalPages(res.totalPages);
        setUsers(res.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if (inputValue.length === 0) {
      fetchData();
    }
  }, [page, inputValue]);

  const memoizedSetUsers = useCallback(setUsers, [setUsers]);
  const memoizedSetTotalPages = useCallback(setTotalPages, [setTotalPages]);

  useEffect(() => {
    if (inputValue.length !== 0) {
      const searchUsers = async () => {
        try {
          memoizedSetUsers([]);
          const res = await searchUsersInString({
            inputValue,
            page,
          });
          const { users, totalPages } = res;
          memoizedSetUsers(users);
          memoizedSetTotalPages(totalPages);
        } catch (error) {
          console.log(error);
        }
      };
      searchUsers();
    }
  }, [inputValue, memoizedSetTotalPages, memoizedSetUsers, page]);

  const handleDelete = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    const deleteUser = async (id) => {
      try {
        await deleteUserById({ userId: id });
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } catch (error) {
        console.log(error);
      }
    };
    deleteUser(id);
  };

  const renderCell = useCallback((users: Row, columnKey: React.Key) => {
    const key = columnKey as keyof Row;
    const cellValue = users[key];

    switch (key) {
      case 'avatar':
        return (
            <Badge content="" color={`${users.status ? "success" : "danger"}`} shape="circle" placement="bottom-right">
              <div className="flex flex-col rouned-md fit-content">
                  <Avatar src={cellValue ? String(cellValue) : '/profile/user.png'} />
              </div>
            </Badge>
        );
      case 'name':
      case 'email':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{String(cellValue)}</p>
          </div>
        );
      case 'createdAt':{
        const date = cellValue as Row['createdAt'];
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{formatDate(date)}</p>
          </div>
        );
        }
      case 'posterCounts':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] rounded-full bg-[#E4F1FF] text-[#4291EF] mx-auto px-[10px]">
              {String(cellValue)}
            </p>
          </div>
        );
      case 'role':
        return (
          <Chip
            color={statusColorMap[users?.role]}
            size="md"
            variant="flat"
            className="!w-[200px] flex mx-auto"
          >
            {String(cellValue)}
          </Chip>
        );
      case 'totalPlayedTime':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] text-[blue] rounded-full bg-[#E4F1FF] text-[#4291EF] mx-auto px-[10px]">
              {`${Number(cellValue).toFixed(2)} 円`}
            </p>
          </div>
        );
      case 'expired': {
        const expiredValue = cellValue as Row['expired'];
        if (expiredValue && expiredValue.start && expiredValue.end) {
          return (
            <div className="flex flex-col">
              <p className="text-bold text-[14px]">
                {/* {`${expiredValue.start} - ${expiredValue.end}`} */}
                {`${formatDate(expiredValue.start)} - ${formatDate(expiredValue.end)}`}
              </p>
            </div>
          );
        } else {
          return (
            <div className="flex flex-col">
              <p className="text-bold text-[14px] text-gray-400">
                -
              </p>
            </div>
          );
        }
      }

      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="primary" content="編集">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="削除">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={(event) => handleDelete(users._id, event)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return <>{cellValue !== undefined ? String(cellValue) : "-"}</>;
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col lg:px-[60px] md:px-[40px] sm:px-[10px] xsm:px-[5px] py-[30px] gap-12">
      <div className="max-w-[913px] lg:px-0 md:px-[40px] sm:px-[50px] xsm:px-[30px]">
        <div className="max-w-[913px] lg:px-0 md:px-[40px] sm:px-[50px] xsm:px-[30px]">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            isClearable
            fullWidth={true}
            className="h-full w-full rounded-[15px] border border-2"
            placeholder="検索..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
      <div className="w-full mx-auto lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full">
          <Table
            isHeaderSticky
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
            classNames={{
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
                  total={totalPages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader columns={userTableConfig}>
              {(column) => (
                <TableColumn key={column.uid} align="center">
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={users}>
              {(item) => (
                <TableRow key={item._id} className="cursor-pointer">
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
